import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductViewer from "@/components/productViewer";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero/>
      <ProductViewer/>
    </main>
  );
}
