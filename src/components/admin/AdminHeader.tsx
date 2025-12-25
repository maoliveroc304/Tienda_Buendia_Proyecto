interface AdminHeaderProps {
  title: string;
  subtitle: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 lg:px-10 z-10">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="text-navy-text p-2 -ml-2 rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-bold text-lg text-navy-text">La Despensa</span>
      </div>
      <div className="hidden lg:block">
        <h2 className="text-2xl font-bold text-navy-text">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-navy-text transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
        </button>
        <div className="h-8 w-px bg-gray-200 mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-navy-text">Carlos Buendía</p>
            <p className="text-xs text-gray-500">Administrador</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-secondary-nav text-white flex items-center justify-center font-bold text-lg">
            CB
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
