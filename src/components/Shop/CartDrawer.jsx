import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

import { NumericFormat } from 'react-number-format';

import useCart from '../../Hooks/useCart';
import { IMAGE_PLACEHOLDER, TESTING_EPAYCO } from '../../utilities/constants';
import useSession from '../../Hooks/useSession';
import DiscountService from '../../Services/discount.service';
import PaymentService from '../../Services/payment.service';
import { useSnackbar } from 'notistack';
import AuthModal from './AuthModal';
import ModalConfirmationPay from './ModalConfirmationPay';

const APP_URL = import.meta.env.VITE_APP_URL;

const CartDrawer = ({ open, onClose }) => {
  const [session] = useSession();

  const { enqueueSnackbar } = useSnackbar();
  const [{ token }] = useSession();
  const [shoppingCart, { remove, updateQuantity }] = useCart();
  const [discountCode, setDiscountCode] = useState({
    value: '',
    total: 0,
    id: null,
    isValid: false,
  });
  const [product, setProduct] = useState(null);
  const [loadingDiscountCode, setLoadingDiscountCode] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const $Discount = useMemo(() => new DiscountService(token), [token]);
  const $Payment = useMemo(() => new PaymentService(token), [token]);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const selectedProduct = useMemo(() => shoppingCart.find((p) => p.id === product), [shoppingCart, product]);
  const [openFirstTime, setOpenFirstTime] = useState(false);
  const [message, setMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const subTotal = useMemo(() => (selectedProduct ? Math.round(selectedProduct.package.quantity * selectedProduct.package.unitary_price * (1 - (!discountCode.id ? selectedProduct.package.percent_discount : 0) / 100) * selectedProduct.quantity) : 0), [selectedProduct, discountCode]);
  const total = useMemo(() => subTotal * (selectedProduct?.package.percent_discount <= discountCode.total ? 1 - discountCode.total / 100 : 1), [subTotal, selectedProduct?.package.percent_discount, discountCode.total]);

  const handleDiscountCode = async () => {
    if (!discountCode.value) {
      return;
    }

    setLoadingDiscountCode(true);

    const { data, status } = await $Discount.get({ code: discountCode.value });

    setLoadingDiscountCode(false);

    if (status) {
      const discount = data.data.find((d) => d.name === discountCode.value.trim());

      if (discount) {
        if (Number(selectedProduct.package.percent_discount) < Number(discount.discountPercentage)) {
          setDiscountCode((prev) => ({
            ...prev,
            isValid: true,
            id: discount.id,
            total: discount.discountPercentage,
          }));
        } else {
          enqueueSnackbar('Dado que has seleccionado un artículo con un descuento y has introducido un código de cupón, se aplicará solo el descuento de mayor valor.', { variant: 'warning', autoHideDuration: 10000 });
        }
      }
    }
  };
  const onCloseFirstTime = () => {
    setOpenFirstTime(false);
    setMessage('');
    setOpenConfirmationModal(false);
  };
  const handlePayment = async () => {
    if (session?.user?.rejectedCounter?.some((contract) => contract.rejectedCounter === 1)) {
      setMessage('Intentaste pagar, pero tu pago fue rechazado, entonces hemos recalculado el pago inicial para que puedas proceder.');
      setOpenFirstTime(true);
      setTimeout(() => {
        onCloseFirstTime();
      });
      return;
    }
    if (session?.user?.rejectedCounter?.some((contract) => contract.rejectedCounter >= 2)) {
      setMessage('Evidenciamos que haz presentado dificultades para generar tu compra. Contáctanos vía whatsapp para ayudarte.');
      setOpenFirstTime(true);
      setTimeout(() => {
        onCloseFirstTime();
        window.location.reload();
      }, 5000);
      return;
    }
    setOpenConfirmationModal(false);
    if (!shoppingCart || !shoppingCart.length || !product) {
      return;
    }

    setLoadingPayment(true);

    const { status, data } = await $Payment.validate({
      ...(discountCode.isValid ? { codeDiscount: discountCode.value } : {}),
      payments: [{ ...selectedProduct, total }],
    });

    setLoadingPayment(false);

    if (status) {
      const name = `${selectedProduct.package.quantity} ${selectedProduct.package.product_name} (×${selectedProduct.quantity})`;

      const mandatory = {
        name,
        description: name,
        invoice: `AV-${uuid()}`,
        currency: 'cop',
        amount: total,
        tax_base: '4000',
        tax: '500',
        tax_ico: '500',
        country: 'co',
        lang: 'es',
      };

      const aditional = {
        extra1: JSON.stringify([
          {
            id_discount: selectedProduct.package.id_discount,
            id_product: selectedProduct.package.id_product,
            quantity: selectedProduct.quantity,
          },
        ]),
        extra2: token,
        extra3: null,
        extra4: discountCode.isValid ? JSON.stringify(discountCode) : null,
        confirmation: `${import.meta.env.VITE_API_URL}/contract-transactional-payments`,
        response: `${APP_URL}/checkout?products=${JSON.stringify(shoppingCart.map((p) => ({ id: p.id })))}`,
      };

      const handler = window.ePayco.checkout.configure({
        key: import.meta.env.VITE_EPAYCO_PUBLIC_KEY,
        test: TESTING_EPAYCO,
      });
      handler.open({ ...mandatory, ...aditional, ...{ acepted: `${import.meta.VITE_APP_URL}`, rejected: `${import.meta.VITE_APP_URL}` } });

      // handler.on("payment_error", function (error) {
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 2000);
      // });

      // handler.on("payment_success", function (response) {
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 2000);
      // });
    } else {
      enqueueSnackbar(data.response.data.message, { variant: 'error', autoHideDuration: 10000 });
    }
  };

  useEffect(() => {
    if (session?.user) {
      if (session?.user.status_terms_and_conditions == 0 || !session.user.status_terms_and_conditions_date) {
        localStorage.removeItem('dashboard');
      }
    }
  }, [session.user]);

  useEffect(() => {
    if (shoppingCart?.length > 0 && !product) {
      setProduct(shoppingCart[0]?.id);
    }
  }, [shoppingCart, product]);

  useEffect(() => {
    if (cartItems.length > 0 && !product) {
      setProduct(cartItems[0]?.id_product);
    }
  }, [cartItems, product]);

  const handleBuyClick = () => {
    setAuthModalOpen(true);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItems(storedCart);
    }

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart'));
      if (updatedCart) {
        setCartItems(updatedCart);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[70%] md:w-[60%] lg:w-[700px] xl:w-[700px] max-w-full bg-white shadow-xl transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-hidden h-[100vh] z-10`}>
        {/* Drawer content goes here */}
        <button onClick={onClose} className='absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100' aria-label='Close drawer'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <div className='fixed inset-y-0 right-0 z-50 w-full sm:w-4/5 md:w-3/5 lg:w-[700px] xl:w-[700px] max-w-full bg-white shadow-lg overflow-hidden flex flex-col h-screen'>
          <div className='flex-1 overflow-y-auto p-6 space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='text-3xl font-semibold text-[#67AA36]'>Tu Carrito</h2>
              <button onClick={onClose}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='#67AA36' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6'>
                  <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='space-y-4'>
              {shoppingCart?.map((element, index) => (
                <div key={index} className={`relative flex flex-col xl:flex-row items-center gap-4 p-4 rounded-3xl shadow-md transition-colors hover:bg-gray-50 ${product === element.id ? 'bg-gray-100' : ''}`}>
                  <div className='w-full xl:w-32 aspect-square'>
                    <img src={element.package.url_image || IMAGE_PLACEHOLDER} alt='product' className='w-full h-full object-cover rounded-xl' />
                  </div>

                  {(!discountCode.id ? element?.package.percent_discount : 0) > 0 && <div className='absolute top-2 left-2 flex items-center justify-center w-8 h-8 bg-[#67AA36] text-white text-xs font-medium rounded-full'>-{element?.package.percent_discount}%</div>}

                  <div className='flex flex-col justify-center gap-2 px-2 xl:items-start items-center flex-grow'>
                    <h3 className='text-xl font-semibold'>
                      {element.package.quantity} {element.package.product_name}
                    </h3>

                    <div className='flex items-center gap-2'>
                      <span className='text-base font-semibold'>Cantidad:</span>
                      <div className='flex items-center border border-[#67AA36] rounded-full'>
                        <button className='px-2 py-1 text-[#67AA36] hover:bg-blue-50 rounded-l-full' onClick={() => updateQuantity('decrease', element.id)}>
                          -
                        </button>
                        <span className='px-2 text-[#67AA36] min-w-[32px] text-center'>{element.quantity}</span>
                        <button className='px-2 py-1 text-[#67AA36] hover:bg-blue-50 rounded-r-full' onClick={() => updateQuantity('increase', element.id)}>
                          +
                        </button>
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center gap-1 text-[#67AA36]'>
                      <span className='text-base font-semibold'>Precio</span>
                      <span className='font-medium text-lg'>
                        $
                        <NumericFormat displayType='text' value={Math.round(element.package.quantity * element.package.unitary_price * (1 - (!discountCode.id ? element?.package.percent_discount : 0) / 100) * element.quantity)} thousandSeparator />
                      </span>
                      {(!discountCode.id ? element?.package.percent_discount : 0) > 0 && (
                        <span className='font-semibold text-sm line-through'>
                          $
                          <NumericFormat displayType='text' value={Math.round(element.package.quantity * element.package.unitary_price * element.quantity)} thousandSeparator />
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className='text-red-500 p-2 hover:bg-red-50 rounded-full'
                    onClick={() => {
                      remove(element.id);
                      if (product === element.id) {
                        setProduct(null);
                      }
                    }}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className='flex gap-2 mx-0 sm:mx-16'>
              <input type='text' disabled={discountCode.isValid} placeholder='Código de cupón' value={discountCode.value} onChange={(e) => setDiscountCode((prev) => ({ ...prev, value: e.target.value }))} className='flex-grow p-2 border rounded text-sm disabled:bg-gray-100' />
              <button disabled={loadingDiscountCode || discountCode.isValid} onClick={handleDiscountCode} className='px-4 py-2 bg-[#67AA36] text-white rounded text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed'>
                {loadingDiscountCode ? (
                  <svg className='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                ) : (
                  'Aplicar'
                )}
              </button>
            </div>

            <div className='flex flex-col gap-2 w-full '>
              <div className='flex flex-col mt-2 p-2 rounded border border-[#5D9B31]'>
                <div className='flex justify-between items-end h-[33px]'>
                  <p className='text-[#5D9B31] text-base'>Subtotal:</p>
                  <p className='text-[#5D9B31] text-lg'>${subTotal.toLocaleString()}</p>
                </div>
                <div className='flex justify-between items-end h-[33px]'>
                  <p className='text-[#5D9B31] text-base'>Descuento:</p>
                  <p className='text-[#5D9B31] text-lg'>{selectedProduct?.package.percent_discount > discountCode.total ? selectedProduct?.package.percent_discount : discountCode.total}%</p>
                </div>
                {discountCode.isValid && selectedProduct?.package.percent_discount <= discountCode.total && (
                  <div className='flex justify-between items-end h-[33px]'>
                    <p className='text-[#5D9B31] text-base'>Cupón:</p>
                    <p className='text-[#5D9B31] text-lg'>{discountCode.value.trim()}</p>
                  </div>
                )}
                <div className='flex justify-between items-end h-[33px] mt-2'>
                  <p className='text-[#5D9B31] font-semibold'>Total:</p>
                  <p className='text-[#5D9B31] font-semibold text-2xl'>${total.toLocaleString()}</p>
                </div>
              </div>
              {discountCode.isValid && selectedProduct?.package.percent_discount > discountCode.total && (
                <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4' role='alert'>
                  <p className='font-bold'>Advertencia</p>
                  <p>Dado que has seleccionado un artículo con un descuento y has introducido un código de cupón, se aplicará solo el descuento de mayor valor.</p>
                </div>
              )}
              <button
                className='w-full py-2 px-4 bg-[#67AA36] text-white rounded-md hover:bg-[#558b2f] focus:outline-none focus:ring-2 focus:ring-[#67AA36] focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300'
                onClick={() => {
                  if (!session?.token) {
                    handleBuyClick();
                  } else {
                    const dashboardUrl = `${import.meta.env.PUBLIC_APP_URL}/home?token=${session.token}`;
                    window.location.href = dashboardUrl;
                  }
                }}
                disabled={!product || loadingPayment}>
                {loadingPayment ? (
                  <svg className='w-6 h-6 animate-spin mx-auto' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                ) : product ? (
                  'Proceder a pago'
                ) : (
                  'Seleccione un producto para realizar el pago'
                )}
              </button>
            </div>
            <ModalConfirmationPay open={openConfirmationModal} handlePayment={handlePayment} />
          </div>

          <div className={`flex flex-col sm:flex-row justify-between gap-2 p-4`}>
            <div className='p-2 sm:p-0 flex-shrink self-start sm:self-center'>
              <p className='font-bold text-[#67AA36]'>Ayuda con tu Pago</p>
              <p className='text-sm text-[#67AA36]'>Si tienes novedades con tu pago recuerda que nos puedes contactar por medio de WhatsApp para ayudarte!</p>
            </div>
            <div className='flex p-2 sm:p-0'>
              <button onClick={() => setOpenFirstTime(false)} className='mt-2 mr-1 px-4 py-2 bg-[#67AA36] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#67AA36] focus:ring-offset-2'>
                Cerrar
              </button>
              <button
                onClick={() => {
                  window.open('https://wa.me/573148058249?text=APP%20-%20Solicitud%20de%20Ayuda%20en%20la%20Plataforma');
                }}
                className='mt-2 px-4 py-2 bg-[#67AA36] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#67AA36] focus:ring-offset-2'>
                Ir a WhatsApp
              </button>
            </div>
          </div>
        </div>

        {openFirstTime && (
          <div role='dialog' aria-modal='false' aria-label='Cookie banner' className='fixed bottom-0 left-0 right-0 p-2 bg-[#F0F6EB] border-t border-[#5D9B31] ml-[31px]'>
            <div className={`flex flex-col sm:flex-row justify-between gap-2`}>
              <div className='flex-shrink self-start sm:self-center'>
                <p className='font-bold text-[#67AA36]'>Error de Pago</p>
                <p className='text-sm text-[#67AA36]'>{message}</p>
              </div>
              <div className='flex'>
                <button onClick={onCloseFirstTime} className='mt-2 mr-1 px-4 py-2 bg-[#67AA36] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#67AA36] focus:ring-offset-2'>
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    window.open('https://wa.me/573148058249?text=APP%20-%20Solicitud%20de%20Ayuda%20en%20la%20Plataforma');
                  }}
                  className='mt-2 px-4 py-2 bg-[#67AA36] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#67AA36] focus:ring-offset-2'>
                  Ir a WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};

export default CartDrawer;
