import Link from 'next/link';

const PopularCategories = () => {
  return (
    <section className="py-12 bg-white dark:bg-zinc-900">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <h3 className="text-2xl font-bold mb-8 text-secondary-nav dark:text-white">Categorías Populares</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/category/perros" className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300 border-4 border-transparent group-hover:border-primary"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxJJZQSRTQ0d3RKsd0GOtVnS2laFdNxXf9XMNVqwESzzv5kQHJ4FIAMm94jgbMECYVE0KC95XAsPxbd7Fg6y4TJkwqixQKRRS2SCWdT5Bd8EZbrGMfX8_csIhZQ2uBErN0k2drBCBhCSyfI7V78EQ6q_2vg94eFt95QP4FGgrPDnAZkKBT-XYRnxYXkDOBfjR52nT9wvepDdpoaLuaPGc18T3I988FjsB_fm1idg_rpi7_BFnQqEj7mtVp6fjDEPHMsZfOL2Zowms')",
              }}
            ></div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary">Perros</span>
          </Link>
          <Link href="/category/gatos" className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300 border-4 border-transparent group-hover:border-primary"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLvRHsyjVQP1uhoCOkONZCFixnoFHiw5Z1xtRkqK4V4pblh4UkWmnuKV_2P3TR27duVlNHU6s36T32AcImaBNFrW7eznG5lfP0UnlX5TyS7u27uCWU81sTzkPnxh4WDgZ1QOk3qNwQFRYpKKXiIEJP2WIA6hZuiHDYi66VDrNsP2f0G-h5749WP_z-pKIZKSqJ2QSNMDWjRnyY5MuyRcFX75jmgdkE3Dh62ZNN0YCfgrCYige7tbZdWzwOG13ZXsJPW-mBmsaM-Gg')",
              }}
            ></div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary">Gatos</span>
          </Link>
          <Link href="/category/limpieza" className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300 border-4 border-transparent group-hover:border-primary"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsKUPgikB3fJs3ojUHfn_CM-8Dy6PtMWCV1M6dGElH5ReNOAbRGCTZK1U_zxNCOR9ol-qgfzVtVP_XnB5ygpins7xh17Jd5gEguXz4-WzTy3pvEi5Bo2JFvIBrOl8kq6nDn-5CmZ68LrLaDdhdXw7aiyLOAqF0yjIwoVWIttgbmCNaVWMHJwmeYgr6Vu4hpIuxDJGMag_TbD453HanYAP4kIW1qBgZL2wiEC_k97dey-SZmfRJRGOtSLo6HxAtA3QK9zSc-LlEb1I')",
              }}
            ></div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary">Limpieza</span>
          </Link>
          <Link href="/category/accesorios" className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-300 border-4 border-transparent group-hover:border-primary"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrzlDhbGO8MTcJcZxJANrICy-xhP89_rBDxjx0tK2Z8HsCGtZihpmd21FiDgnwMuZeYSsuiQTdjNVNCZ6x9MvoEUVHTxATxSyVEbrhIl3BJRJc-COSOAE2LPDKCvtjntIIzf5Uezv-85VQWu43eaVHB_Aco7_n_bt6pC9mYYSTzfaShdSLQFZObH-MMMo4XzKV9tScapf6SeJrD-9jW2lDRoF-truwTBfH9pkTkbmzLD0JCUqhkHbxrTz9iAC35Mnnr0QHJwpk1YA')",
              }}
            ></div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary">Accesorios</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
