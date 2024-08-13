import About from "@/components/About";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
      </div>
      <div className="pt-16 flex justify-between">
        <Welcome />
        <div className="w-[50%] overflow-hidden ">
          <Model />
        </div>
      </div>
        <div className=""> 
          <Services />
        </div>
        <div className="">
          <About />
        </div>
    </main>
  );
}
