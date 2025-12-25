import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary-nav shadow-lg">
      <div className="layout-container flex justify-center w-full">
        <div className="px-4 lg:px-10 py-3 w-full max-w-[1280px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 lg:gap-4 shrink-0">
            <div className="bg-white/10 p-2 rounded-full hidden sm:block">
              <span className="material-symbols-outlined text-white text-3xl">pets</span>
            </div>
            <div className="flex flex-col text-white">
              <h1 className="text-base lg:text-xl font-bold leading-tight tracking-tight">La Despensa de la Mascota</h1>
              <span className="text-xs lg:text-sm font-light opacity-90">por Tienda Buendía</span>
            </div>
          </Link>
          <div className="hidden md:flex flex-1 max-w-[500px] px-4">
            <div className="relative w-full text-gray-600 focus-within:text-gray-800">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">search</span>
              </div>
              <input
                className="block w-full pl-10 pr-4 py-2.5 rounded-full border-none focus:ring-2 focus:ring-primary text-sm bg-white"
                placeholder="Buscar croquetas, juguetes..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 text-white">
            <Link href="/profile" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <span className="material-symbols-outlined text-2xl">person</span>
              <span className="hidden lg:block text-sm font-medium">Mi Cuenta</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-2 hover:text-gray-200 transition-colors relative">
              <div className="relative">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-secondary-nav">3</span>
              </div>
              <span className="hidden lg:block text-sm font-medium">S/. 145.00</span>
            </Link>
            <button className="md:hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
