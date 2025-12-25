import React from 'react';

const ProfileContent = () => {
  return (
    <div className="lg:col-span-8 xl:col-span-9 space-y-6">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-zinc-700">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-secondary-nav dark:text-blue-300">
            <span className="material-symbols-outlined">badge</span>
          </div>
          <h3 className="text-lg font-bold text-secondary-nav dark:text-white">Información Personal</h3>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="name">Nombre Completo</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white placeholder-gray-400"
              id="name"
              type="text"
              defaultValue="Juan Pérez"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="email">Correo Electrónico</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 bg-gray-50 dark:bg-zinc-900/50 dark:border-zinc-600 dark:text-gray-400 cursor-not-allowed"
              id="email"
              readOnly
              type="email"
              defaultValue="juan.perez@email.com"
            />
            <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              Contacta a soporte para cambiar el email
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="phone">Teléfono Celular</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
              id="phone"
              type="tel"
              defaultValue="+51 987 654 321"
            />
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300" htmlFor="dob">Fecha de nacimiento</label>
              <span className="text-xs text-gray-500 dark:text-gray-500 font-normal italic">(Opcional)</span>
            </div>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
              id="dob"
              type="date"
            />
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300" htmlFor="gender">Sexo</label>
              <span className="text-xs text-gray-500 dark:text-gray-500 font-normal italic">(Opcional)</span>
            </div>
            <select
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white text-gray-700 dark:text-gray-300"
              id="gender"
            >
              <option value="">Seleccionar...</option>
              <option value="female">Femenino</option>
              <option value="male">Masculino</option>
              <option value="other">Otro</option>
              <option value="prefer_not_say">Prefiero no decirlo</option>
            </select>
          </div>
        </form>
      </div>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-zinc-700">
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-300">
            <span className="material-symbols-outlined">lock</span>
          </div>
          <h3 className="text-lg font-bold text-secondary-nav dark:text-white">Cambiar Contraseña</h3>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="current_password">Contraseña Actual</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
              id="current_password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="new_password">Nueva Contraseña</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
              id="new_password"
              type="password"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-nav dark:text-gray-300 mb-1.5" htmlFor="confirm_password">Confirmar Nueva Contraseña</label>
            <input
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-2.5 px-3 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
              id="confirm_password"
              type="password"
            />
          </div>
        </form>
      </div>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-zinc-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-300">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h3 className="text-lg font-bold text-secondary-nav dark:text-white">Mis Direcciones</h3>
          </div>
          <button
            className="text-sm font-bold text-primary hover:text-orange-700 flex items-center gap-1 py-1 px-3 rounded-full hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span> Agregar
          </button>
        </div>
        <div className="space-y-4">
          <div className="group relative flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-600 hover:border-primary/50 hover:bg-orange-50/30 transition-all bg-gray-50/50 dark:bg-zinc-900/30">
            <div className="shrink-0 mt-1 text-secondary-nav dark:text-gray-400">
              <span className="material-symbols-outlined">home</span>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-secondary-nav dark:text-white">Casa (Principal)</span>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 tracking-wide">
                  Default
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Av. Próceres de la Independencia 1234, Dpto 301</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">San Juan de Lurigancho, Lima</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button className="text-gray-400 hover:text-secondary-nav dark:hover:text-white p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded transition-colors" title="Editar">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
            </div>
          </div>
          <div className="group relative flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-zinc-600 hover:border-primary/50 hover:bg-orange-50/30 transition-all bg-gray-50/50 dark:bg-zinc-900/30">
            <div className="shrink-0 mt-1 text-secondary-nav dark:text-gray-400">
              <span className="material-symbols-outlined">work</span>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-secondary-nav dark:text-white">Oficina</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calle Las Begonias 450, Torre A</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">San Isidro, Lima</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button className="text-gray-400 hover:text-secondary-nav dark:hover:text-white p-1 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded transition-colors" title="Editar">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
              <button className="text-gray-400 hover:text-red-500 p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Eliminar">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 flex justify-end sticky bottom-4 z-30 pointer-events-none">
        <button
          className="pointer-events-auto w-full md:w-auto px-10 py-3 bg-primary hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30 flex items-center justify-center gap-2 text-lg"
          type="button"
        >
          <span className="material-symbols-outlined">save</span>
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;