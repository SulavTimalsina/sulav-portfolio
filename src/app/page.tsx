import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Nav from "@/components/Nav";
import Recognition from "@/components/Recognition";
import Research from "@/components/Research";
import Ventures from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="pt-[57px] md:pl-[260px] md:pt-0">
        <main>
          <Hero />
          <Ventures />
          <Research />
          <Leadership />
          <Recognition />
        </main>
        <Contact />
      </div>
    </>
  );
}
