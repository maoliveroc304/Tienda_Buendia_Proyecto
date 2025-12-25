import React from 'react';

const CheckoutForm = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-sm border border-[#f0f0f0] dark:border-gray-700 [&:has(input[value='pickup']:checked)_#address-details]:hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
          <h3 className="text-lg font-bold text-navy dark:text-white">Método de Entrega</h3>
        </div>
        <div className="bg-[#f4f0f0] dark:bg-gray-800 p-1.5 rounded-lg flex flex-col sm:flex-row mb-6">
          <label className="flex-1 cursor-pointer mb-2 sm:mb-0">
            <input className="peer sr-only" name="delivery_method" type="radio" value="pickup" />
            <div className="h-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium text-gray-500 transition-all peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-primary peer-checked:shadow-sm ring-1 ring-transparent peer-checked:ring-gray-200 dark:peer-checked:ring-gray-600">
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>Recojo en Tienda Buendía</span>
            </div>
          </label>
          <label className="flex-1 cursor-pointer">
            <input defaultChecked className="peer sr-only" name="delivery_method" type="radio" value="delivery" />
            <div className="h-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium text-gray-500 transition-all peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-primary peer-checked:shadow-sm ring-1 ring-transparent peer-checked:ring-gray-200 dark:peer-checked:ring-gray-600">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              <span>Delivery (Gratis &gt; S/ 50)</span>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="address-details">
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
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="Av. Próceres de la Independencia 123"
              type="text"
            />
          </label>
          <label className="flex flex-col md:col-span-2">
            <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Referencia</span>
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="Ej: Portón negro, frente al parque, casa de 3 pisos"
              required
              type="text"
            />
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
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              type="text"
              defaultValue="Juan Alberto"
            />
          </label>
          <label className="flex flex-col flex-1">
            <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Apellidos</span>
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              type="text"
              defaultValue="Pérez Rodriguez"
            />
          </label>
          <label className="flex flex-col flex-1">
            <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Celular</span>
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              type="tel"
              defaultValue="987 654 321"
            />
          </label>
          <label className="flex flex-col flex-1">
            <span className="text-navy dark:text-gray-300 text-sm font-medium pb-1.5">Correo Electrónico</span>
            <input
              className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              type="email"
              defaultValue="juan.perez@gmail.com"
            />
          </label>
        </div>
      </section>
      <section className="bg-white dark:bg-[#2a2a2a] rounded-xl p-6 shadow-sm border border-[#f0f0f0] dark:border-gray-700 [&:has(input[value='card']:checked)_#card-form]:block [&:has(input[value='yape']:checked)_#yape-info]:block">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
          <h3 className="text-lg font-bold text-navy dark:text-white">Método de Pago</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="relative cursor-pointer group">
            <input defaultChecked className="peer sr-only" name="payment_method" type="radio" value="yape" />
            <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <span className="material-symbols-outlined text-purple-600 text-3xl">qr_code_scanner</span>
              </div>
              <div>
                <p className="font-bold text-navy dark:text-white">YAPE / PLIN</p>
                <p className="text-xs text-gray-500">Escanea y paga</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                <span className="material-symbols-outlined filled">check_circle</span>
              </div>
            </div>
          </label>
          <label className="relative cursor-pointer group">
            <input className="peer sr-only" name="payment_method" type="radio" value="card" />
            <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="material-symbols-outlined text-blue-600 text-3xl">credit_card</span>
              </div>
              <div>
                <p className="font-bold text-navy dark:text-white">Tarjeta</p>
                <p className="text-xs text-gray-500">Crédito o Débito</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                <span className="material-symbols-outlined filled">check_circle</span>
              </div>
            </div>
          </label>
          <label className="relative cursor-pointer group">
            <input className="peer sr-only" name="payment_method" type="radio" value="cash" />
            <div className="h-full p-4 rounded-xl border-2 border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center justify-center text-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="material-symbols-outlined text-green-600 text-3xl">payments</span>
              </div>
              <div>
                <p className="font-bold text-navy dark:text-white">Efectivo</p>
                <p className="text-xs text-gray-500">Contraentrega</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
                <span className="material-symbols-outlined filled">check_circle</span>
              </div>
            </div>
          </label>
        </div>
        <div className="hidden mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-lg flex gap-3" id="yape-info">
          <span className="material-symbols-outlined text-yellow-600 mt-0.5">info</span>
          <div>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">Instrucciones para Yape/Plin</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300/80 mt-1">
              Al confirmar tu pedido, te mostraremos el código QR. Tu pedido se procesará una vez envíes la captura del pago al WhatsApp.
            </p>
          </div>
        </div>
        <div className="hidden mt-6 pt-6 border-t border-gray-100 dark:border-gray-700" id="card-form">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-bold text-navy dark:text-white">Datos de la Tarjeta</h4>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="material-symbols-outlined text-xl">lock</span>
              <span className="text-xs font-bold uppercase">Pago Seguro</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-navy dark:text-gray-300 uppercase tracking-wide">Número de Tarjeta</label>
              <div className="relative group">
                <input
                  className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 pl-11 pr-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">credit_card</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy dark:text-gray-300 uppercase tracking-wide">Fecha de Vencimiento</label>
              <div className="relative group">
                <input
                  className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 pl-11 pr-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="MM/AA"
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">calendar_month</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy dark:text-gray-300 uppercase tracking-wide">CVV / CVC</label>
              <div className="relative group">
                <input
                  className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 pl-11 pr-10 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="123"
                  type="password"
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">lock</span>
                <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-help" title="Código de 3 dígitos al reverso">help</span>
              </div>
            </div>
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-navy dark:text-gray-300 uppercase tracking-wide">Nombre del Titular</label>
              <input
                className="w-full rounded-lg border border-[#e5dcdc] dark:border-gray-600 bg-white dark:bg-gray-800 text-navy dark:text-white h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Como aparece en la tarjeta"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-sm text-green-600">verified_user</span>
            <p>Tus datos están protegidos con encriptación SSL de 256 bits.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;