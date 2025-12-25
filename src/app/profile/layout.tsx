import Link from 'next/link';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-secondary-nav dark:text-white mb-2">Mi Perfil</h1>
              <p className="text-secondary-nav/70 dark:text-gray-400 text-sm sm:text-base">Gestiona tus datos personales y preferencias de cuenta.</p>
            </div>
            <nav aria-label="Breadcrumb" className="flex text-sm text-gray-500">
              <ol className="flex items-center space-x-2">
                <li><Link className="hover:text-primary transition-colors" href="/">Inicio</Link></li>
                <li><span className="material-symbols-outlined text-sm pt-1">chevron_right</span></li>
                <li className="font-medium text-secondary-nav dark:text-white">Mi Perfil</li>
              </ol>
            </nav>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 xl:col-span-3 space-y-6">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-700 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-600 shadow-md">
                    <span className="material-symbols-outlined text-gray-400 text-5xl">person</span>
                  </div>
                  <button className="absolute bottom-0 right-0 bg-secondary-nav text-white p-1.5 rounded-full hover:bg-primary transition-colors shadow-sm border-2 border-white dark:border-zinc-800" title="Cambiar foto">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h2 className="text-xl font-bold text-secondary-nav dark:text-white">Juan Pérez</h2>
                <p className="text-sm text-gray-500 mb-4">juan.perez@email.com</p>
                <div className="w-full border-t border-gray-100 dark:border-zinc-700 pt-4 mt-2">
                  <nav className="flex flex-col gap-1 text-left w-full">
                    <Link className="flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700/50 rounded-lg transition-colors" href="/profile">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                      Datos Personales
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700/50 rounded-lg transition-colors" href="/profile/orders">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                      Mis Pedidos
                    </Link>
                    <Link className="flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700/50 rounded-lg transition-colors" href="/profile/favorites">
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                      Favoritos
                    </Link>
                    <a className="flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors mt-2" href="#">
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Cerrar Sesión
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 xl:col-span-9">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
