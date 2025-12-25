import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary-nav text-white pt-16 pb-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">pets</span>
              <div className="leading-tight">
                <h4 className="font-bold text-lg">La Despensa</h4>
                <span className="text-xs opacity-70">de la Mascota</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Tu tienda de confianza con precios de barrio. Cuidamos a tus engreídos como si fueran nuestros.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <span className="text-xs font-bold">FB</span>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <span className="text-xs font-bold">TK</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4 text-primary">Navegación</h5>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/category/perros" className="hover:text-primary transition-colors">Perros</Link></li>
              <li><Link href="/category/gatos" className="hover:text-primary transition-colors">Gatos</Link></li>
              <li><Link href="/offers" className="hover:text-primary transition-colors">Ofertas</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contáctanos</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4 text-primary">Contacto</h5>
            <ul className="flex flex-col gap-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5 text-base">location_on</span>
                <span>Av. Próceres de la Independencia 1234,<br />San Juan de Lurigancho, Lima.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">call</span>
                <span>(01) 345-6789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                <span>hola@tiendabuendia.pe</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4 text-primary">Encuéntranos</h5>
            <div className="rounded-lg overflow-hidden h-32 w-full bg-gray-700 relative mb-4">
              <div
                className="w-full h-full bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4jmpIQJbk_Rx_nmF0h9OGJZib-gymCz605_tKHkh1a9uJtdLFvj-B_YzLNWiDLxfA1sAjBqiVkPelExPg6esEJBiChH-49VZbgUGoVCxQRJWwJa56-vXXOZn0UGOCeLHMTDakH9VKWFvVIxgjjo7fvrwSOVUKgATmG3_N2MhzIPG7UduZJoqxisrjzv-WonjIBT1X7dDHmHvX2eXCYyZltx0NN7EPrKI8Lp7Xccr4cAu27dwpT8xt5eWV2wpNK0Rc_KFHqx7NIlg')" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-white text-3xl drop-shadow-md">map</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-60">
              <span>Aceptamos:</span>
              <span className="font-bold">Yape, Plin, Visa</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2024 Tienda Buendía. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Términos y Condiciones</Link>
            <Link href="/privacy" className="hover:text-white">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
