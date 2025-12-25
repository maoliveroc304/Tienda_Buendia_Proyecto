import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
        <div className="bg-secondary-nav p-8 text-center flex flex-col items-center justify-center">
          <div className="bg-white/10 p-3 rounded-full mb-4 inline-flex">
            <span className="material-symbols-outlined text-white text-4xl">pets</span>
          </div>
          <h1 className="text-xl font-bold text-white leading-tight">La Despensa de la Mascota</h1>
          <p className="text-sm text-white/80 font-light mt-1">por Tienda Buendía</p>
        </div>
        <div className="p-8 pt-10">
          <h2 className="text-2xl font-bold text-center text-navy-text dark:text-white mb-8">Bienvenido de nuevo</h2>
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-sm font-medium text-navy-text dark:text-gray-300 mb-2 pl-1" htmlFor="identifier">
                Correo electrónico o celular
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">person</span>
                </div>
                <input
                  autoComplete="username"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                  id="identifier"
                  name="identifier"
                  placeholder="tu@correo.com o número de celular"
                  required
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-text dark:text-gray-300 mb-2 pl-1" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">lock</span>
                </div>
                <input
                  autoComplete="current-password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl leading-5 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <a className="text-sm font-medium text-primary hover:text-red-700 transition-colors" href="#">
                ¿Olvidaste contraseña?
              </a>
            </div>
            <button
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-primary hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95"
              type="submit"
            >
              Ingresar
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ¿No tienes cuenta?{' '}
              <Link className="font-bold text-navy-text dark:text-white hover:text-primary transition-colors ml-1" href="/register">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
