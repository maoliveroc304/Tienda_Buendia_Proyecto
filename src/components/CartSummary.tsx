import React from 'react';

const CartSummary = () => {
  return (
    <div className="w-full lg:w-[380px] shrink-0">
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 sticky top-28 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-zinc-700">
          <h3 className="font-bold text-xl text-secondary-nav dark:text-white">Resumen del Pedido</h3>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
            <span>Subtotal (3 productos)</span>
            <span className="font-medium">S/. 176.50</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
            <span>Descuento por ofertas</span>
            <span className="font-medium text-cta-orange">- S/. 6.00</span>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
            <span>Envío estimado</span>
            <span className="text-gray-400 text-xs text-right max-w-[120px]">Calculado en el siguiente paso</span>
          </div>
          <div className="border-t border-dashed border-gray-200 dark:border-zinc-700 my-2"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-secondary-nav dark:text-white">Total</span>
            <span className="font-bold text-2xl text-secondary-nav dark:text-white">S/. 170.50</span>
          </div>
          <button className="w-full bg-cta-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-4">
            <span>Ir a Pagar</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
            <span className="material-symbols-outlined text-sm">lock</span>
            Pago 100% seguro
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;