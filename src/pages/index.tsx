export default function Home() {
  return (
    <div className="bg-white min-h-screen font-serif text-gray-900">

      <main
        className="text-center py-20 md:py-60 px-6 max-w-4xl mx-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/background/home-2.png')" }}
      >
        <h2 className="bg-white/70 text-4xl md:text-5xl font-semibold leading-tight mb-4">
          " Cut the wait<br />Cue the Magic "
        </h2>
        <p className="text-lg text-gray-600 mb-10 bg-white/70 p-4 rounded-lg inline-block">
          Cut Cue helps small salons and independent stylists manage bookings via WhatsApp. <br className="hidden md:block" />
          Simple, powerful, and made for Tier 2/3 India.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10 bg-white/80 p-4 rounded-lg">
          <select className="border rounded px-4 py-2 text-sm">
            <option>City</option>
          </select>
          <select className="border rounded px-4 py-2 text-sm">
            <option>Service Type</option>
          </select>
          <select className="border rounded px-4 py-2 text-sm">
            <option>Stylist Gender</option>
          </select>
          <select className="border rounded px-4 py-2 text-sm">
            <option>Price Range</option>
          </select>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            Browse Salons
          </button>
        </div>
      </main>


      <section>
        
      </section>
    </div>
  );
}
