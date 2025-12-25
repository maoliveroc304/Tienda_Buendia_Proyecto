import Link from 'next/link';
import CartItem from '@/components/CartItem';
import ProductCard from '@/components/ProductCard';

const cartItems = [
  {
    name: 'Ricocan Cordero y Cereales 15kg',
    description: 'Saco 15kg',
    price: '119.00',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Z1LMZsb74Tgm4Cdh1NMPZkSL8GB__pXbsiyqQiyL2faccfvknLupd0mIUrZUg21s-PggD_RMTBlxDgiiaiSilpfny7A0F9W31Cv2Em_QRo1wYXLs1RcxPnAMj4rJqn4YxlTUp3ac9Rqp-fRTxVYJI4jO__tswqLtZH-ucX4STrjSFuNuIZMutrtmJQAVPwMuOKrC7j6ng0L3vIc-tYRfzwfaLRnHRKhNPNhq48nkeD6ewUYIpuckVMjlRwX0CGiB8OcovDKBUA8',
  },
  {
    name: 'Hueso de Goma Resistente',
    description: 'Azul, Talla M',
    price: '25.50',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlSHN0ihN9GWy8Ixg5SkN_LmV3g4svzUUE8T1GOvttUR2Vzs_vVCnqfM5l9k2E2ap1YvC4JJEizq0Bo6GCqOWIGy7dNL_xLgSJpQEsRIXRgkQVgq4kDZuCd7sU9EIgIqIhtJ5VMX932AOOAkmZYQP-eoezJNLwtKtATXOnXC4x2kDkq0sjXHwyv4Gi6E-sk0p8cEnvQuW55KvNA48Nx2QI12xPdztXGq-tYBioWsSem8oW2TaUOSgv8yq7Ux2rKtYupITY2Cd7ZU',
  },
  {
    name: 'Shampoo Antipulgas 400ml',
    description: 'Uso veterinario',
    price: '32.00',
    oldPrice: '38.00',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsuVxadySIdQfFR3W32inefrZh7BcWmzCnla6FpYVAfCTeCGK5rTWsSYFf5FLwwGAtTUy33YNK46Ad-mhHQQKOGEgvog9YJ110IeNv59vwAICfqoqTdTY90vBUDkDIRqnbpyJqKXdt_9Pu94OybLQ7h26cCrkQPVGcFxoL1MXb1h6KA0P6mWDllW6YML62mBS5XdjzoPu54kFbc1n2aNYA3bSOi-PlbMN5m9WzwthdBPb2TCDB-GYZWpSwEomsvQkHlyWZXK4npd0',
  },
];

const recommendedProducts = [
    {
    category: 'Higiene',
    name: 'Spray Limpiador 300ml',
    price: '28.90',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsuVxadySIdQfFR3W32inefrZh7BcWmzCnla6FpYVAfCTeCGK5rTWsSYFf5FLwwGAtTUy33YNK46Ad-mhHQQKOGEgvog9YJ110IeNv59vwAICfqoqTdTY90vBUDkDIRqnbpyJqKXdt_9Pu94OybLQ7h26cCrkQPVGcFxoL1MXb1h6KA0P6mWDllW6YML62mBS5XdjzoPu54kFbc1n2aNYA3bSOi-PlbMN5m9WzwthdBPb2TCDB-GYZWpSwEomsvQkHlyWZXK4npd0',
    badge: 'Top'
  },
  {
    category: 'Snacks',
    name: 'Pack Premios DogChow',
    price: '15.90',
    oldPrice: '18.90',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Z1LMZsb74Tgm4Cdh1NMPZkSL8GB__pXbsiyqQiyL2faccfvknLupd0mIUrZUg21s-PggD_RMTBlxDgiiaiSilpfny7A0F9W31Cv2Em_QRo1wYXLs1RcxPnAMj4rJqn4YxlTUp3ac9Rqp-fRTxVYJI4jO__tswqLtZH-ucX4STrjSFuNuIZMutrtmJQAVPwMuOKrC7j6ng0L3vIc-tYRfzwfaLRnHRKhNPNhq48nkeD6ewUYIpuckVMjlRwX0CGiB8OcovDKBUA8',
    badge: '-15%'
  },
  {
    category: 'Salud',
    name: 'Collar Antipulgas Seresto',
    price: '145.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlSHN0ihN9GWy8Ixg5SkN_LmV3g4svzUUE8T1GOvttUR2Vzs_vVCnqfM5l9k2E2ap1YvC4JJEizq0Bo6GCqOWIGy7dNL_xLgSJpQEsRIXRgkQVgq4kDZuCd7sU9EIgIqIhtJ5VMX932AOOAkmZYQP-eoezJNLwtKtATXOnXC4x2kDkq0sjXHwyv4Gi6E-sk0p8cEnvQuW55KvNA48Nx2QI12xPdztXGq-tYBioWsSem8oW2TaUOSgv8yq7Ux2rKtYupITY2Cd7ZU'
  }
]

export default function CartPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-6 lg:py-10 pb-40 lg:pb-12">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-secondary-nav dark:hover:text-white flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Seguir comprando
          </Link>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-secondary-nav dark:text-white mb-8">Carrito de Compras</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-secondary-nav dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-cta-orange">verified</span>
                  ¡Lo más vendido!
                </h3>
                <Link href="/products" className="text-sm font-semibold text-cta-orange hover:text-orange-600 flex items-center gap-1 transition-colors">
                  Ver todo <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {recommendedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[380px] shrink-0 hidden lg:block">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 sticky top-28 overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-zinc-700">
                <h3 className="font-bold text-xl text-secondary-nav dark:text-white">Resumen del Pedido</h3>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
                  <span>Subtotal (3 productos)</span>
                  <span className="font-medium">S/. 176.50</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
                  <span>Descuento por ofertas</span>
                  <span className="font-medium text-cta-orange">- S/. 6.00</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
                  <span>Envío estimado</span>
                  <span className="text-gray-400 text-xs text-right max-w-[120px]">Calculado en el siguiente paso</span>
                </div>
                <div className="border-t border-dashed border-gray-200 dark:border-zinc-700 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-secondary-nav dark:text-white">Total</span>
                  <span className="font-bold text-2xl text-secondary-nav dark:text-white">S/. 170.50</span>
                </div>
                <Link href="/checkout" className="w-full bg-cta-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-4">
                  <span>Ir a Pagar</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Pago 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] z-40">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total (3 prod.)</span>
            <span className="text-xl font-black text-secondary-nav dark:text-white">S/. 170.50</span>
          </div>
          <Link href="/checkout" className="w-full bg-cta-orange hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2">
            <span>Ir a Pagar</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </>
  );
}
