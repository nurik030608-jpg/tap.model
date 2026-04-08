export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="h-[75vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Smart PC Builder
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            AI-powered system that builds the perfect PC for your needs
          </p>
          <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
            Try Demo
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700 text-lg">
            Our platform analyzes user needs and recommends the most optimized PC build
            for gaming, work, study, and AI tasks.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">1. Choose purpose</h3>
              <p className="text-gray-600">Gaming, work, study or AI</p>
            </div>

            <div className="p-6 rounded-2xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">2. AI analyzes</h3>
              <p className="text-gray-600">The system selects the best components</p>
            </div>

            <div className="p-6 rounded-2xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">3. Get your build</h3>
              <p className="text-gray-600">Receive an optimized PC for your budget</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}