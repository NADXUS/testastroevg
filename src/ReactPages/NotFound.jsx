import React from 'react';
import Footer from '../components/Footer';

function NotFound() {

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <div className='flex flex-col items-center justify-center flex-grow'>
        <h1 className='text-3xl font-bold text-center text-[#0D524C] my-12'>Página no encontrada</h1>

        <img
          src="/Common/logo.svg"
          alt='logos'
          style={{
            width: '30%',
            height: '30%',
            marginBottom: '2rem',
          }}
        />
        <button className='text-base font-bold bg-[#F9E988] text-[#0D524C] rounded-full px-6 py-4 mt-16 hover:bg-[#B4D564] transition-all duration-300' onClick={() => handleNavigation('/')}>
          Ir al inicio
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
