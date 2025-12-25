import ProductCard from '@/components/ProductCard';

const favoriteProducts = [
  {
    category: 'Perros - Alimento Seco',
    name: 'Dog Chow Adultos Razas Pequeñas 3kg',
    price: '45.90',
    oldPrice: '52.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9xwScYU48GvUDvTwPl9rrvfZm09bQVB94KfvPnSZTXwDdKL5eB7Evx3_zTiQwF1_E8Xi2bvocRqLB6rZup4c13WRznJi8rk1wUVr47DveorDSrXJzPfQCfmifD6hb5veCxLzlNgciQo2h7xSAX_nK-EKzqq13ROO7JIaYjsEWLujGiAley8hyYXpZ8ySeq-ZPCROsPOH3Sx40MGOX_y2iqsA8bybp935jKY2BaJeTUhmxuAGuOz-SbPyRtdh7_TZ8OBSdiCv1wKc',
    badge: '-15%',
  },
  {
    category: 'Juguetes - Perros',
    name: 'Juguete Hueso de Goma Resistente',
    price: '15.50',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhaUBbTB7dGovgf-0ExRXhSQUe-9x5BangpDUUvZIB9jIeqwsuX1M7bX7hR2kGjibCAB3Hpr_L6cteX5W23fYhHG3CaDOGcQxU1-jGA9i8tP3Y0fslsggi-XfbEOjyCoru1cHLHAtWZW4bw6gBPQ1Ze4HW6x42uYYNzlqrLsVpSHZqc7gxUiveaDozt5rK_PAaH7nX24_VFrwkVAA4g-L4rgL8554WUdzWl-XbwwKj7B2c0L7hSS9ZmdT5AYuqO6SHntI71_ZGZWo',
  },
  {
    category: 'Accesorios - Gatos',
    name: 'Cama Moisés para Gato - Gris',
    price: '89.90',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_mKRXgdQvBOPeKgwgrOmii0_dzoldoUhajfXzycXktH9fiuWPgxXJzgHLk9-u426zBi6FCwa_lkxQgXYrmlxXGmCjOQSwziKXSCb7VnJv1Nl1ybPz9O1R0pEuoDRDKYhWtu9u0TXmATyal38gCyVhGc0Ks6PHHcUFLWIz2f4s2XoSBdCVHsm-A-CEqMfJMWtAkU4Wy6PqGrWe3G1moMK8nHKd1sVj0avKuIEaIMmawO5DBPKT7QwwCbgkS5ZdQYywb4zIRAqqlkE',
  },
];

export default function FavoritesPage() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-700 min-h-[400px]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-zinc-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-primary dark:text-red-300">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <h3 className="text-lg font-bold text-secondary-nav dark:text-white">5 Productos Guardados</h3>
        </div>
        <button className="text-sm text-gray-500 hover:text-primary transition-colors hidden sm:block">
          Limpiar todo
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
