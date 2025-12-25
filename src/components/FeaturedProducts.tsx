import Link from 'next/link';
import ProductCard from './ProductCard';

const products = [
  {
    category: 'Perros - Alimento Seco',
    name: 'Ricocan Cordero y Cereales 15kg',
    price: '119.00',
    oldPrice: '140.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3Z1LMZsb74Tgm4Cdh1NMPZkSL8GB__pXbsiyqQiyL2faccfvknLupd0mIUrZUg21s-PggD_RMTBlxDgiiaiSilpfny7A0F9W31Cv2Em_QRo1wYXLs1RcxPnAMj4rJqn4YxlTUp3ac9Rqp-fRTxVYJI4jO__tswqLtZH-ucX4STrjSFuNuIZMutrtmJQAVPwMuOKrC7j6ng0L3vIc-tYRfzwfaLRnHRKhNPNhq48nkeD6ewUYIpuckVMjlRwX0CGiB8OcovDKBUA8',
    badge: '-15%',
  },
  {
    category: 'Gatos - Alimento Seco',
    name: 'Ricocat Atún y Sardinas 9kg',
    price: '85.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKCo8V8QDG2SAZBukKaZ8D8HDpP5iAdequtjJM52Cl7DdstyFKI-h5bT7ikgc6akCZkKh5dpxASuLMayYRV5PKOepgBpwZfRTiblJxhX3IfCx9G5Ql6zNElkpTYGjHM4rGvyvujKHnh0VtmlBrQRrA-FV3RMpy1elDWCTieVyIZE_sejTAfbom39OiZytu31dTEl5XZ8bDOktGsZiQv5fUeadhaB23DuUQuQt53Lq6Hjvisg9EIucJE5owEjeF1MKf8pv2wkQwseA',
  },
  {
    category: 'Juguetes - Perros',
    name: 'Hueso de Goma Resistente',
    price: '25.50',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlSHN0ihN9GWy8Ixg5SkN_LmV3g4svzUUE8T1GOvttUR2Vzs_vVCnqfM5l9k2E2ap1YvC4JJEizq0Bo6GCqOWIGy7dNL_xLgSJpQEsRIXRgkQVgq4kDZuCd7sU9EIgIqIhtJ5VMX932AOOAkmZYQP-eoezJNLwtKtATXOnXC4x2kDkq0sjXHwyv4Gi6E-sk0p8cEnvQuW55KvNA48Nx2QI12xPdztXGq-tYBioWsSem8oW2TaUOSgv8yq7Ux2rKtYupITY2Cd7ZU',
  },
  {
    category: 'Higiene - General',
    name: 'Shampoo Antipulgas 400ml',
    price: '32.00',
    oldPrice: '38.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsuVxadySIdQfFR3W32inefrZh7BcWmzCnla6FpYVAfCTeCGK5rTWsSYFf5FLwwGAtTUy33YNK46Ad-mhHQQKOGEgvog9YJ110IeNv59vwAICfqoqTdTY90vBUDkDIRqnbpyJqKXdt_9Pu94OybLQ7h26cCrkQPVGcFxoL1MXb1h6KA0P6mWDllW6YML62mBS5XdjzoPu54kFbc1n2aNYA3bSOi-PlbMN5m9WzwthdBPb2TCDB-GYZWpSwEomsvQkHlyWZXK4npd0',
    badge: 'OFERTA',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-bold text-secondary-nav dark:text-white">Productos Destacados</h3>
          <Link href="/products" className="text-primary font-bold hover:underline flex items-center">
            Ver todo <span className="material-symbols-outlined text-sm ml-1">arrow_forward_ios</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
