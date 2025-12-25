import React from 'react';

const AdminSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-secondary-nav text-white h-full shadow-2xl z-20">
      <div className="p-6 flex items-center gap-3 border-b border-white/10">
        <div className="bg-white/10 p-2 rounded-full">
          <span className="material-symbols-outlined text-primary text-2xl">pets</span>
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">La Despensa</h1>
          <p className="text-xs text-white/60">Administrador</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium transition-colors" href="/admin">
          <span className="material-symbols-outlined">dashboard</span>
          Panel Principal
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors" href="/admin/inventory">
          <span className="material-symbols-outlined">inventory_2</span>
          Inventario
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors" href="/admin/sales">
          <span className="material-symbols-outlined">shopping_cart</span>
          Ventas
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors" href="/admin/analytics">
          <span className="material-symbols-outlined">analytics</span>
          Analítica
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors" href="/admin/feedback">
          <span className="material-symbols-outlined">reviews</span>
          Quejas y Sugerencias
        </a>
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors" href="/admin/history">
          <span className="material-symbols-outlined">history</span>
          Historial
        </a>
      </nav>
      <div className="p-4 border-t border-white/10">
        <a className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">logout</span>
          Cerrar Sesión
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;