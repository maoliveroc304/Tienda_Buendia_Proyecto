const Hero = () => {
  return (
    <section className="relative bg-background-light dark:bg-background-dark">
      <div
        className="w-full h-[500px] md:h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 31, 63, 0.4), rgba(0, 31, 63, 0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGkOYn4A1tEQ3SppVa5eQHIcaxgAZMf9RJkkuKPi_bvVykVlCMuyubXd66sv_42V9Pwi7ABWyieP0D24ZOBxQp07cC5cxYhgsG04atJblcvb3WV532VV4l7QTv6dCmCtaqwwqBoQ6YQ0WhEQdvbewahVd4qxq4jzJoFcjUyrg08NQXd8I_Xr_z2BoMokoc2ULMHrFnrsq2XQFFlOtT8CBdcSSb8-dm8vEaqIjn8KKZZCCTB_t2zbbUVaRp3elNyMj8QNzMHG9XdKc')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative h-full max-w-[1280px] mx-auto px-4 lg:px-10 flex flex-col justify-center items-start text-white">
          <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Solo lo mejor
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 max-w-2xl shadow-sm">
            Todo para tu engreído, <br />
            <span className="text-primary">precios de barrio.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-lg opacity-90">
            Encuentra alimentos premium, accesorios y más. Delivery rápido a todo San Juan de Lurigancho.
          </p>
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
            Ver Ofertas
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
