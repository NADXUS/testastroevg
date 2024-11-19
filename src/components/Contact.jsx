import React from 'react'

export default function Contact() {
  return (
    <div className="bg-[#0d524c] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-16">
          <p className="text-[#f9e988] mb-2">Contáctanos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ponte en Contacto</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-[#0a4741] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#2a5f59] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#cde77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Correo Electrónico</h3>
            <p className="text-gray-400 mb-4">Nuestro amable equipo está aquí para ayudar</p>
            <a href="mailto:info@avovite.com" className="text-white hover:text-[#cde77c] transition-colors">
              info@avovite.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-[#0a4741] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#2a5f59] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#cde77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Contáctanos</h3>
            <p className="text-gray-400 mb-4">Lun-Vie de 9 a.m. a 7 p.m.</p>
            <button onClick={() => window.open('https://wa.me/573148058249', '_blank')} className="bg-transparent border-2 border-[#f9e988] text-[#f9e988] px-6 py-2 rounded-full hover:bg-[#f9e988] hover:text-green-900 transition-colors">
              Escribenos por WhatsApp
            </button>
          </div>

          {/* Location Card */}
          <div className="bg-[#0a4741] rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#2a5f59] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#cde77c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Finca</h3>
            <p className="text-gray-400 mb-4">Ven a saludarnos en nuestra finca principal.</p>
            <p className="text-white">
              Las Cascadas Montebello,
              <br />
              Antioquia, Colombia.
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}