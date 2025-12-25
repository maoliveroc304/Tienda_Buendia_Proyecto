import Link from 'next/link';

interface ProductCardProps {
  product: {
    category: string;
    name: string;
    price: string;
    oldPrice?: string;
    image: string;
    badge?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group">
      <div className="relative h-64 w-full bg-gray-100 dark:bg-zinc-700 overflow-hidden">
        {product.badge && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</div>
        )}
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${product.image}')` }}
        ></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">{product.name}</h4>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && <span className="text-xs text-gray-400 line-through">S/. {product.oldPrice}</span>}
            <span className="text-xl font-black text-primary">S/. {product.price}</span>
          </div>
          <button className="bg-primary hover:bg-orange-700 text-white py-3 px-5 rounded-xl transition-colors flex items-center gap-2 shadow-lg font-bold min-h-[48px]">
            <span className="text-sm">Agregar</span>
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
