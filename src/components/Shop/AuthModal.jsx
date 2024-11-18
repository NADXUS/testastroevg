import React, { useState, useMemo } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AuthService from '../../Services/auth.service';
import SignInModal from './SignInModal';

const StatusIcon = ({ status = false }) => (
  <svg xmlns='http://www.w3.org/2000/svg' className={`h-5 w-5 ${status ? 'text-green-500' : 'text-red-500'}`} viewBox='0 0 20 20' fill='currentColor'>
    <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
  </svg>
);

const AuthModal = ({ open, onClose }) => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    cellphone: '',
    privacyPolicy: false,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    message: '',
    status: 'success',
  });
  const [error, setError] = useState(undefined);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const $Auth = useMemo(() => new AuthService(), []);

  const passwordStatus = useMemo(
    () => ({
      minimumCharacters: user.password.length >= 8,
      atLeastOneUppercase: /[A-Z]/.test(user.password),
      atLeastOneSymbol: /[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/.test(user.password),
    }),
    [user.password]
  );

  const onUserChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(!emailRegex.test(value));
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();

    if (!(user.fullname && user.email && user.password && user.cellphone)) {
      setFeedback({
        show: true,
        message: 'Todos los campos son obligatorios.',
        status: 'error',
      });
      return;
    }
    if (!user.privacyPolicy) {
      setFeedback({
        show: true,
        message: 'Debes aceptar los términos y condiciones.',
        status: 'error',
      });
      return;
    }
    if (!(passwordStatus.minimumCharacters && passwordStatus.atLeastOneUppercase && passwordStatus.atLeastOneSymbol)) {
      setFeedback({
        show: true,
        message: 'La contraseña no cumple con los requisitos.',
        status: 'error',
      });
      return;
    }
    if (error) {
      setFeedback({
        show: true,
        message: 'El correo electrónico no es válido.',
        status: 'error',
      });
      return;
    }

    const { status, data } = await $Auth.signup(user);

    if (!status) {
      setFeedback({
        show: true,
        message: 'Ha ocurrido un error. Inténtelo de nuevo.',
        status: 'error',
      });
    } else {
      if (data?.data === 'Email already registered') {
        setFeedback({
          show: true,
          message: 'El correo ya está registrado.',
          status: 'error',
        });
      } else {
        setFeedback({
          show: true,
          message: 'Registro exitoso.',
          status: 'success',
        });
        onClose();
      }
    }
  };

  const resetFeedback = () => setFeedback({ ...feedback, show: false });

  const handleChangeModal = () => {
    setSignInModalOpen(true);
  };

  if (!open) return null;

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10'>
        <div className='bg-white rounded-lg w-full max-w-md'>
          <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-[#67AA36] text-center'>Crear Cuenta</h2>
            <form onSubmit={onSignup} className='space-y-4'>
              {/* Campo Nombre */}
              <div className='relative'>
                <input type='text' name='fullname' value={user.fullname} onChange={onUserChange} className='w-full p-3 border border-gray-300 rounded-lg pl-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#67AA36]' placeholder='Nombres y Apellidos *' required />
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400 absolute left-3 top-4' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                </svg>
              </div>

              {/* Campo Email */}
              <div className='relative'>
                <input type='email' name='email' value={user.email} onChange={onUserChange} className='w-full p-3 border border-gray-300 rounded-lg pl-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#67AA36]' placeholder='Correo Electrónico *' required />
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400 absolute left-3 top-4' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </div>

              {/* Campo Contraseña */}
              <div className='relative'>
                <input type={isVisible ? 'text' : 'password'} name='password' value={user.password} onChange={onUserChange} className='w-full p-3 border border-gray-300 rounded-lg pl-10 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#67AA36]' placeholder='Contraseña *' required />
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400 absolute left-3 top-4' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                </svg>
                <button type='button' onClick={() => setIsVisible(!isVisible)} className='absolute right-3 top-4'>
                  {isVisible ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd' />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
                      <path fillRule='evenodd' d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z' clipRule='evenodd' />
                      <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                    </svg>
                  )}
                </button>
              </div>

              {/* Campo Teléfono */}
              <PhoneInput
                country={'co'}
                value={user.cellphone}
                onChange={(value) => onUserChange({ target: { name: 'cellphone', value } })}
                inputProps={{
                  name: 'cellphone',
                  required: true,
                  className: 'w-full p-3 border border-gray-300 rounded-lg',
                }}
              />

              {/* Checkbox */}
              <div className='flex items-center'>
                <label htmlFor='privacyPolicy' className='flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    id='privacyPolicy'
                    name='privacyPolicy'
                    checked={user.privacyPolicy}
                    onChange={(e) =>
                      onUserChange({
                        target: {
                          name: 'privacyPolicy',
                          value: e.target.checked,
                        },
                      })
                    }
                    className='hidden peer'
                  />
                  <div className='w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-md transition-all duration-200 peer-checked:border-[#67AA36] peer-checked:bg-[#67AA36] peer-focus:ring-2 peer-focus:ring-blue-300'>
                    <svg className='w-3 h-3 text-white transition-opacity duration-200 opacity-0 peer-checked:opacity-100' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'>
                      <polyline points='20 6 9 17 4 12' />
                    </svg>
                  </div>
                  <span className='ml-2 text-sm text-gray-700'>He leído y acepto los términos y condiciones</span>
                </label>
              </div>

              {/* Botones */}
              <button onClick={handleChangeModal} className='py-3 text-[#67AA36] hover:underline w-full text-center transition-all duration-200 hover:bg-[#519b2e11] rounded-lg max-w-[200px] mx-auto flex justify-center'>
                ¿Ya tienes cuenta?
              </button>
              <div className='flex justify-between mt-6'>
                <button type='button' onClick={onClose} className='w-[48%] bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition'>
                  Cancelar
                </button>
                <button type='submit' className='w-[48%] bg-[#67AA36] hover:bg-[#519b2e] text-white py-3 rounded-lg font-semibold transition'>
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {feedback.show && (
        <div className={`fixed top-4 right-4 p-4 rounded ${feedback.status === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
          {feedback.message}
          <button onClick={resetFeedback} className='ml-2 text-white'>
            ×
          </button>
        </div>
      )}

      <SignInModal openSignIn={signInModalOpen} onClose={() => setSignInModalOpen(false)} />
    </>
  );
};

export default AuthModal;
