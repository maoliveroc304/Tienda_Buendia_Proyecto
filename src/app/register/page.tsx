export default function RegisterPage() {
  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-nav/10 dark:bg-white/10 mb-4 animate-bounce-slow">
            <span className="material-symbols-outlined text-4xl text-secondary-nav dark:text-white">person_add</span>
          </div>
          <h2 className="text-3xl font-bold text-secondary-nav dark:text-white">Registro de Nuevo Usuario</h2>
          <p className="mt-2 text-sm text-secondary-nav/80 dark:text-gray-400">
            Crea tu cuenta en minutos y empieza a engreír a tu mascota.
          </p>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-secondary-nav dark:text-gray-200 mb-1" htmlFor="nombres">
                Nombres
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">badge</span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-gray-50 dark:bg-zinc-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm dark:text-white transition-all"
                  id="nombres"
                  name="nombres"
                  placeholder="Ej. María García"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary-nav dark:text-gray-200 mb-1" htmlFor="celular">
                Celular <span className="text-xs font-normal text-gray-500 ml-1">(Para contacto WhatsApp)</span>
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">smartphone</span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-gray-50 dark:bg-zinc-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm dark:text-white transition-all"
                  id="celular"
                  name="celular"
                  placeholder="999 999 999"
                  required
                  type="tel"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary-nav dark:text-gray-200 mb-1" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">mail</span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-gray-50 dark:bg-zinc-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm dark:text-white transition-all"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary-nav dark:text-gray-200 mb-1" htmlFor="password">
                Crear Contraseña
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">lock</span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-gray-50 dark:bg-zinc-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm dark:text-white transition-all"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Mínimo 8 caracteres</p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                id="terms"
                name="terms"
                required
                type="checkbox"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-medium text-secondary-nav dark:text-gray-300" htmlFor="terms">
                He leído y acepto los{' '}
                <a className="text-primary hover:text-orange-700 font-bold underline decoration-dotted" href="#">
                  Términos y Condiciones
                </a>{' '}
                y la Política de Privacidad.
              </label>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-orange-500/30 transform transition-all duration-200 hover:-translate-y-1"
              type="submit"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-white/80 group-hover:text-white transition-colors">check_circle</span>
              </span>
              Crear Cuenta
            </button>
          </div>
          <div className="text-center mt-6 border-t border-gray-100 dark:border-zinc-700 pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ¿Ya tienes una cuenta?{' '}
              <a className="font-bold text-secondary-nav hover:text-primary dark:text-white dark:hover:text-primary transition-colors" href="/login">
                Inicia Sesión aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
