import AdminHeader from '@/components/admin/AdminHeader';

export default function AdminDashboardPage() {
  return (
    <>
      <AdminHeader title="Panel de Control" subtitle="Bienvenido de nuevo, Admin." />
      <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-50 text-secondary-nav p-3 rounded-xl">
                  <span className="material-symbols-outlined">attach_money</span>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-gray-500 text-sm font-medium">Ventas Totales (Hoy)</p>
              <h3 className="text-3xl font-bold text-navy-text mt-1">$1,240.00</h3>
            </div>
            {/* More stat cards */}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-navy-text flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">sell</span>
                    Estado de Ventas
                  </h3>
                  <button className="text-sm font-medium text-primary hover:text-primary-hover">Ver todo</button>
                </div>
                {/* Sales table */}
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-navy-text flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">bar_chart</span>
                    Analítica de Ingresos
                  </h3>
                  {/* ... */}
                </div>
                {/* Chart */}
              </div>
            </div>
            <div className="space-y-6">
              {/* Other panels */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
