interface CartItemProps {
  item: {
    name: string;
    description: string;
    price: string;
    oldPrice?: string;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700 flex gap-4 relative">
      <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-gray-100 dark:bg-zinc-700 rounded-lg overflow-hidden border border-gray-100 dark:border-zinc-600">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-secondary-nav dark:text-white text-base sm:text-lg leading-tight line-clamp-2">{item.name}</h3>
            <button aria-label="Eliminar producto" className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <span className="material-symbols-outlined text-cta-orange">delete</span>
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
        </div>
        <div className="flex justify-between items-end mt-2">
          <div className="flex items-center bg-gray-100 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-700 h-9">
            <button className="w-8 h-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-l-lg transition-colors">
              <span className="material-symbols-outlined text-sm font-bold">remove</span>
            </button>
            <input
              className="w-8 h-full bg-transparent text-center text-sm font-bold text-secondary-nav dark:text-white border-none p-0 focus:ring-0"
              readOnly
              type="text"
              value={item.quantity}
            />
            <button className="w-8 h-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-r-lg transition-colors">
              <span className="material-symbols-outlined text-sm font-bold">add</span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            {item.oldPrice && <span className="text-xs text-gray-400 line-through">S/. {item.oldPrice}</span>}
            <span className="text-lg sm:text-xl font-bold text-secondary-nav dark:text-white">S/. {item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
