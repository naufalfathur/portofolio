import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col justify-center">
      <Hero />
    </main>
  );
}
