import Link from 'next/link';

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
        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">dashboard</span>
          Panel Principal
        </Link>
        <Link href="/admin/inventory" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">inventory_2</span>
          Inventario
        </Link>
        <Link href="/admin/sales" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
          Ventas
        </Link>
        <Link href="/admin/analytics" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">analytics</span>
          Analítica
        </Link>
        <Link href="/admin/feedback" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">reviews</span>
          Quejas y Sugerencias
        </Link>
        <Link href="/admin/history" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
          <span className="material-symbols-outlined">history</span>
          Historial
        </Link>
      </nav>
      <div className="p-4 border-t border-white/10">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white transition-colors">
          <span className="material-symbols-outlined">logout</span>
          Cerrar Sesión
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;
