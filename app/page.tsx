import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
      </div>
      <div className="pt-16">
        <Welcome />
      </div>
    </main>
  );
}
