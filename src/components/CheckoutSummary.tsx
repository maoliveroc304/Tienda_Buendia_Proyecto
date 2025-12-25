import React from 'react';

const CheckoutSummary = () => {
  return (
    <div className="sticky top-24 flex flex-col gap-4">
      <div className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow-lg border border-[#f0f0f0] dark:border-gray-700 overflow-hidden">
        <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-navy">
          <h3 className="font-bold text-lg text-white">Resumen de tu Pedido</h3>
        </div>
        <div className="p-5 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
          <div className="flex gap-3">
            <div
              className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center border border-gray-200"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsc0ovZqpKgwaERP2T7_Redtmv_9ICm04tR6LdXY3ZaZAMXZ5vLunMGjLLt3lv6eZn9kRCdckkDQzxBuwEP4GdOc7B8tJU1I6p4QXUya91l4KehpyE7OJ98GkKj9npCia7CYxYjn4McxZt7g_yG0TWP02PtUdAsX4WpVpA9I2xaa8mefd9_cZj6GexiZbRY6KKSXLxD3Wa5NQnbNWS2hlz5qHvpQnadLwoh7O24GtAE8N72iUSz5rxOFY0aX2Oq8Wa9vEquhFOGf0')" }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-sm font-bold text-navy dark:text-white line-clamp-2">Comida para Perros Dog Chow 15kg - Adultos</span>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500">Cant: 1</span>
                <span className="text-sm font-bold text-primary">S/ 120.00</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div
              className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center border border-gray-200"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhltFnTScQKwGwBicUpkq_oJcM6JtXW2DCZNarp8UE5NWCUftsO9cygEz99A0b8gn1gSRGGkbLBVKenDrGFtyhCnFofpQOtLjfymRaJs_kV5EFF9aIWWZ3_PeXLrVRtlS3kI2bqYaOEz1VbcLkztWGFSV5svjRWdSjy-bQqu5vsv0ieUKGtcT7t3LynPczg9Xsthcp_tIVq-dU3qwQCYWng3QBFihl98hsZecjsojuyxvdaYVx7mKhYCELzYkRr1KDksFcPh5lwB0')" }}
            ></div>
            <div className="flex flex-col flex-1">
              <span className="text-sm font-bold text-navy dark:text-white line-clamp-2">Pelota de Goma Resistente</span>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500">Cant: 2</span>
                <span className="text-sm font-bold text-primary">S/ 25.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-100 dark:bg-gray-700 mx-5"></div>
        <div className="p-5 pb-0">
          <div className="flex gap-2">
            <input className="flex-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent focus:outline-none focus:border-primary" placeholder="Código de cupón" type="text" />
            <button className="text-sm font-bold text-navy hover:text-primary px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors">Aplicar</button>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2 text-sm">
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Subtotal</span>
            <span>S/ 145.00</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>Envío</span>
            <span className="text-green-600 font-medium">Gratis</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>IGV (18%)</span>
            <span>S/ 26.10</span>
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <div className="flex justify-between items-end">
            <span className="font-bold text-lg text-navy dark:text-white">Total a Pagar</span>
            <span className="font-black text-2xl text-navy dark:text-white">S/ 171.10</span>
          </div>
        </div>
        <div className="p-5 pt-0">
          <button className="w-full bg-[#FF4500] hover:bg-[#CC3700] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Confirmar Pedido</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
          <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">lock</span>
            Tus datos están protegidos por SSL
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-[#2a2a2a] rounded-xl p-4 shadow-sm border border-[#f0f0f0] dark:border-gray-700 flex items-center gap-4">
        <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
          <span className="material-symbols-outlined">support_agent</span>
        </div>
        <div>
          <p className="text-sm font-bold text-navy dark:text-white">¿Necesitas ayuda?</p>
          <a className="text-xs text-gray-500 hover:text-primary underline" href="#">
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;