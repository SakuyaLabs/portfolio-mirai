import Business from "@/components/business/Business";
import CareersExcerpt from "@/components/careers/CareersExcerpt";
import Hero from "@/components/hero/Hero";
import NewsExcerpt from "@/components/news/NewsExcerpt";
import WorksExcerpt from "@/components/works/WorksExcerpt";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Business />
      <WorksExcerpt />
      <CareersExcerpt />
      <NewsExcerpt />
    </main>
  );
}
