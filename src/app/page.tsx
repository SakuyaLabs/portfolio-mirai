import Business from "@/components/business/Business";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Business />
    </main>
  );
}
