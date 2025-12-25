const ProductSuggestion = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="bg-gray-100 dark:bg-zinc-800 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 shadow-inner border border-gray-200 dark:border-zinc-700">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block p-3 bg-white dark:bg-zinc-900 rounded-full mb-4 shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary">campaign</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-secondary-nav dark:text-white mb-3">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Somos tu tienda de barrio. Pídelo aquí y haremos todo lo posible por traerlo a la tienda para ti.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <form className="flex flex-col gap-3">
              <label htmlFor="product-request" className="sr-only">
                Nombre del producto
              </label>
              <div className="relative">
                <input
                  id="product-request"
                  type="text"
                  placeholder="Ej: Correa retráctil XL..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-zinc-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-zinc-900 dark:text-white"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md"
                >
                  Sugerir
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left mt-1">
                Te avisaremos cuando esté disponible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSuggestion;
