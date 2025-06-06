import AppCard from "@/components/home/AppCard";
import GlassCard from "@/components/home/GlassCard";

export default function Home() {
  const data: never[] = []
  return (
    <div className="bg-white min-h-screen  text-gray-900">

      <main
        className="text-center py-20 md:py-60 px-6 max-w-4xl mx-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/background/home-2.png')" }}
      >
        <h2 className="bg-white/30 backdrop-blur-md border-white/20 text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Cut the wait<br />Cue the Magic
        </h2>
        <p className="text-[12px] md:text-lg text-gray-900 mb-10 bg-white/30 backdrop-blur-md  border-white/20 p-4 rounded-lg inline-block">
          Cut Cue helps small salons and independent stylists manage bookings via WhatsApp. <br className="hidden md:block" />
          Simple, powerful, and made for Tier 2/3 India.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10 bg-white/30 backdrop-blur-md   border-white/20 p-4 rounded-lg">
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
          <button className="bg-black/70 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm">
            Browse Salons
          </button>
        </div>
      </main>

      <section className="container mx-auto">
        <h4 className="md:text-2xl ml-5 my-4 font-bold">Recommended : </h4>
        <GlassCard />
      </section>

      <section className="container mx-auto">
        <h4 className="md:text-2xl ml-5 my-4 font-bold">Near By You : </h4>
        <GlassCard />
      </section>


     <AppCard />


    </div>
  );
}
