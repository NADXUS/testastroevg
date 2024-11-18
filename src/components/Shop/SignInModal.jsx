import React, { useState, useMemo, useEffect } from 'react';
import AuthService from '../../Services/auth.service';
import useSession from '../../Hooks/useSession';

const SignInModal = ({ openSignIn, onClose }) => {
  const [, { setToken }] = useSession();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [feedback, setFeedback] = useState({
    show: false,
    message: '',
    status: 'success',
  });
  const $Auth = useMemo(() => new AuthService(), []);
  const [intermediateToken, setIntermediateToken] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const tokenParam = useMemo(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get('token');
    }
    return null;
  }, []);

  const onUserChange = () => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onSignin = async (event) => {
    event.preventDefault();

    const { status, data, error } = await $Auth.signin(user);

    if (!status) {
      setFeedback({
        show: true,
        message: error,
        status: 'error',
      });

      return;
    }
    setModalOpen(true);
    setIntermediateToken(data);
    onClose();
  };

  const resetFeedback = () => setFeedback((prev) => ({ ...prev, show: false }));

  useEffect(() => {
    const validateEmail = async () => {
      if (tokenParam) {
        const { status, data } = await $Auth.validateEmail(tokenParam);
        if (status) {
          setFeedback({
            show: true,
            message: 'Correo Electrónico validado correctamente.',
            status: 'success',
          });
        }
      }
    };

    validateEmail();
  }, [tokenParam]);

  const handleClose = () => {
    setModalOpen(false);
    setToken(intermediateToken);
  };

  return (
    <>
      {/* Main Modal */}
      {openSignIn && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6'>
            <h2 className='text-2xl font-bold mb-6 text-[#67AA36] text-center'>Iniciar Sesión</h2>
            <form onSubmit={onSignin} className='flex flex-col gap-4'>
              {/* Email Input */}
              <div className='relative'>
                <input type='email' name='email' value={user.email} onChange={onUserChange} className='w-full p-3 border border-gray-300 rounded-lg pl-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-[#67AA36]' placeholder='Correo Electrónico *' required />
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400 absolute left-3 top-4' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </div>

              {/* Password Input */}
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

              <div className='flex justify-end gap-4'>
                <button type='button' onClick={onClose} className='w-[48%] bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition'>
                  Cancelar
                </button>
                <button type='submit' className='w-[48%] bg-[#67AA36] hover:bg-[#519b2e] text-white py-3 rounded-lg font-semibold transition'>
                  Iniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Feedback Snackbar */}
      {feedback.show && (
        <div className='fixed top-4 right-4 bg-white shadow-lg rounded-md border-l-4 p-4 border-green-500'>
          <p className='text-sm'>{feedback.message}</p>
        </div>
      )}

      {/* Welcome Modal */}
      {modalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6'>
            <h2 className='text-2xl font-bold mb-6 text-[#67AA36] text-center'>PLATAFORMA AVOVITE</h2>
            <p className='text-sm text-gray-600 my-12'>Te damos la Bienvenida a la Plataforma de AVOVITE</p>
            <button onClick={handleClose} className='px-4 py-2 text-white rounded-md mt-6 bg-[#67AA36] hover:bg-[#519b2e] mx-auto flex'>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
