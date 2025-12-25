import React from 'react';

const ProfileSidebar = () => {
  return (
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
            <a className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-lg font-medium transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">person</span>
              Datos Personales
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700/50 rounded-lg transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              Mis Pedidos
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700/50 rounded-lg transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">favorite</span>
              Favoritos
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors mt-2" href="#">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Cerrar Sesión
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;