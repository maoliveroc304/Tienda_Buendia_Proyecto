export default function MyOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-700 transition-all hover:shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-gray-100 dark:border-zinc-700 gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Pedido #849302</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">20 Oct 2023</span>
            </div>
            <h3 className="font-bold text-lg text-secondary-nav dark:text-white">Entregado el 22 Oct</h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">check_circle</span> Completado
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="w-full sm:w-20 h-20 bg-gray-100 dark:bg-zinc-700/50 rounded-lg flex items-center justify-center shrink-0 border border-gray-200 dark:border-zinc-600">
            <span className="material-symbols-outlined text-gray-400 text-3xl">shopping_bag</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-secondary-nav dark:text-white text-base">Pack Canbo Adulto Cordero 15kg + Pate</p>
            <p className="text-sm text-gray-500 mt-1">2 artículos • Envío Standard</p>
          </div>
          <div className="text-center sm:text-right shrink-0 min-w-[100px]">
            <p className="text-xs text-gray-500 mb-1">Total Pagado</p>
            <p className="font-bold text-xl text-primary">S/ 210.00</p>
          </div>
        </div>
        <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-100 dark:border-orange-900/30">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-secondary-nav dark:text-white text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500 text-[20px]">star</span>
              Califica tu compra
            </h4>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div className="mb-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">¿Qué tal te pareció el servicio y los productos?</p>
            <div className="flex gap-2">
              <button className="p-1 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-yellow-400 text-3xl">star</span></button>
              <button className="p-1 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-yellow-400 text-3xl">star</span></button>
              <button className="p-1 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-yellow-400 text-3xl">star</span></button>
              <button className="p-1 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-yellow-400 text-3xl">star</span></button>
              <button className="p-1 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">star</span></button>
            </div>
          </div>
          <textarea
            className="w-full rounded-lg border-gray-300 dark:border-zinc-600 dark:bg-zinc-800 text-sm p-3 focus:ring-primary focus:border-primary mb-3"
            placeholder="Escribe un comentario sobre tu pedido (opcional)..."
            rows={2}
          ></textarea>
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors">Cancelar</button>
            <button className="bg-primary hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5">Enviar Reseña</button>
          </div>
        </div>
      </div>
    </div>
  );
}
