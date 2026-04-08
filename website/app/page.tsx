export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Smart PC Builder</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#">Product</a>
            <a href="#">Features</a>
            <a href="#">Demo</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 -z-10" />

        {/* FLOATING BLUR CIRCLE */}
        <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl top-20 left-10 -z-10" />
        <div className="absolute w-[300px] h-[300px] bg-gray-300/40 rounded-full blur-3xl bottom-10 right-10 -z-10" />

        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Build smarter.<br />
            Not harder.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A modern platform that helps you discover the perfect PC — visually, intelligently, effortlessly.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-black text-white hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-100 border shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
            <p className="text-gray-600">
              Automatically matches your needs with optimal hardware configurations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-100 border shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Visual Experience</h3>
            <p className="text-gray-600">
              Clean and intuitive interface designed for effortless exploration.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-100 border shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Flexible Choices</h3>
            <p className="text-gray-600">
              No rigid categories — explore freely based on your intent.
            </p>
          </div>

        </div>
      </section>

      {/* SHOWCASE CARD */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <div className="p-10 rounded-3xl bg-white shadow-lg border relative overflow-hidden">

            {/* glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gray-200 rounded-full blur-3xl" />

            <h2 className="text-3xl font-bold mb-6">
              Experience a new way of building PCs
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl">
              Instead of choosing parts manually, explore intelligent suggestions in a fluid,
              modern interface designed for clarity and speed.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border bg-gray-50">
                <p className="text-sm text-gray-500 mb-2">Example Output</p>
                <p className="font-medium">High Performance Setup</p>
                <p className="text-gray-600 text-sm mt-2">
                  Balanced between power and cost
                </p>
              </div>

              <div className="p-6 rounded-2xl border bg-gray-50">
                <p className="text-sm text-gray-500 mb-2">Estimated Budget</p>
                <p className="font-medium">$900 – $1500</p>
                <p className="text-gray-600 text-sm mt-2">
                  Optimized for value
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © 2026 Smart PC Builder
      </footer>

    </main>
  );
}