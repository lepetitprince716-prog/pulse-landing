import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
