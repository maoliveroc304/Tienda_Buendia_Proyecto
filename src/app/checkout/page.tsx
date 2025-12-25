import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5dcdc] bg-white px-4 md:px-10 py-3 shadow-sm">
        <div className="flex items-center gap-4 text-navy">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">pets</span>
          </div>
          <h2 className="text-navy dark:text-gray-100 text-lg md:text-xl font-bold leading-tight tracking-[-0.015em]">La Despensa de la Mascota</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/cart" className="text-gray-400 font-medium hover:text-navy transition-colors">Carrito</Link>
            <span className="material-symbols-outlined text-gray-300 text-xs">chevron_right</span>
            <span className="text-primary font-bold">Checkout</span>
            <span className="material-symbols-outlined text-gray-300 text-xs">chevron_right</span>
            <span className="text-gray-400 font-medium">Confirmación</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-base">lock</span>
            Compra Segura
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBciInB5rsSeh46qiihGWI6o3VHfQVO17ur5SJOXxDW-2yz8ANaIBNjKSWpLgrmGwuOccDTsWK3fa5Ys9tl5gZtl6J7MgDYb7939VMhxN_Fe18mTWJgH67rNGoSqcsnWuX16wBshHtmxQ8c24UiaXYpcT-U0NDzDXkL5otzdac7trcivfq6BKJfG0JVZGlHGJvlvbrTeXZ08Rcgb3PfUtc6Bd42DsaV2Q4tt1oeom7MBinmQpad8FeAXuE-FyYk-_X__NqbXCe01Og")' }}
          ></div>
        </div>
      </header>
      <main className="flex-grow layout-container px-4 md:px-10 py-8 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-navy dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Finalizar Compra</h1>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal">Completa tus datos para recibir tu pedido hoy mismo.</p>
            </div>

            <section className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-sm border border-[#f0f0f0] dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <h3 className="text-lg font-bold text-navy dark:text-white">Método de Entrega</h3>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Departamento / Distrito</span>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                                <option>Lima, San Juan de Lurigancho</option>
                                <option>Lima, La Molina</option>
                                <option>Lima, Miraflores</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                        </div>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Dirección exacta</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Av. Próceres de la Independencia 123" type="text"/>
                    </label>
                    <label className="flex flex-col md:col-span-2">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Referencia</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Ej: Portón negro, frente al parque, casa de 3 pisos" required type="text"/>
                    </label>
                </div>
            </section>

            <section className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-sm border border-[#f0f0f0] dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <h3 className="text-lg font-bold text-navy dark:text-white">Datos de Contacto</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Nombres</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" value="Juan Alberto"/>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Apellidos</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" value="Pérez Rodriguez"/>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Celular</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="tel" value="987 654 321"/>
                    </label>
                    <label className="flex flex-col flex-1">
                        <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Correo Electrónico</span>
                        <input className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="email" value="juan.perez@gmail.com"/>
                    </label>
                </div>
            </section>

            <section className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-sm border border-[#f0f0f0] dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <h3 className="text-lg font-bold text-navy dark:text-white">Método de Pago</h3>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="relative cursor-pointer group">
                        <input checked className="peer sr-only" name="payment_method" type="radio" value="yape"/>
                        <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
                            <div className="bg-purple-100 p-2 rounded-lg"><span className="material-symbols-outlined text-purple-600 text-3xl">qr_code_scanner</span></div>
                            <div><p className="font-bold text-navy dark:text-white">YAPE / PLIN</p><p className="text-xs text-gray-500">Escanea y paga</p></div>
                            <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity"><span className="material-symbols-outlined filled">check_circle</span></div>
                        </div>
                    </label>
                    <label className="relative cursor-pointer group">
                        <input className="peer sr-only" name="payment_method" type="radio" value="card"/>
                        <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg"><span className="material-symbols-outlined text-blue-600 text-3xl">credit_card</span></div>
                            <div><p className="font-bold text-navy dark:text-white">Tarjeta</p><p className="text-xs text-gray-500">Crédito o Débito</p></div>
                            <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity"><span className="material-symbols-outlined filled">check_circle</span></div>
                        </div>
                    </label>
                    <label className="relative cursor-pointer group">
                        <input className="peer sr-only" name="payment_method" type="radio" value="cash"/>
                        <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg"><span className="material-symbols-outlined text-green-600 text-3xl">payments</span></div>
                            <div><p className="font-bold text-navy dark:text-white">Efectivo</p><p className="text-xs text-gray-500">Contraentrega</p></div>
                            <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity"><span className="material-symbols-outlined filled">check_circle</span></div>
                        </div>
                    </label>
                </div>
            </section>
          </div>
          <div className="lg:w-[380px] flex-shrink-0">
            <div className="sticky top-24 flex flex-col gap-4">
                <div className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow-lg border border-[#f0f0f0] dark:border-gray-700 overflow-hidden">
                    <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-navy"><h3 className="font-bold text-lg text-white">Resumen de tu Pedido</h3></div>
                    <div className="p-5 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
                        {/* Cart items */}
                    </div>
                    <div className="h-px bg-gray-100 dark:bg-gray-700 mx-5"></div>
                    <div className="p-5 flex flex-col gap-2 text-sm">
                        <div className="flex justify-between text-gray-600 dark:text-gray-400"><span>Subtotal</span><span>S/ 145.00</span></div>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400"><span>Envío</span><span className="text-green-600 font-medium">Gratis</span></div>
                        <div className="flex justify-between text-gray-600 dark:text-gray-400"><span>IGV (18%)</span><span>S/ 26.10</span></div>
                        <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                        <div className="flex justify-between items-end"><span className="font-bold text-lg text-navy dark:text-white">Total a Pagar</span><span className="font-black text-2xl text-navy dark:text-white">S/ 171.10</span></div>
                    </div>
                    <div className="p-5 pt-0">
                        <button className="w-full bg-[#FF4500] hover:bg-[#CC3700] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                            <span>Confirmar Pedido</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
