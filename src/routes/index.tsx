import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Legacy } from "@/components/Legacy";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { News } from "@/components/News";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rise at Seven — We Create Category Leaders" },
      { name: "description", content: "An award-winning creative agency building category leaders on every searchable platform. Digital PR, SEO, content & strategy." },
      { property: "og:title", content: "Rise at Seven — We Create Category Leaders" },
      { property: "og:description", content: "Award-winning creative agency. Digital PR, SEO, content & strategy." },
    ],
  }),
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <main className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <FeaturedWork />
        <Legacy />
        <Marquee />
        <Services />
        <News />
        <Footer />
      </main>
    </>
  );
}
