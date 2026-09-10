import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import Tools from "@/components/Tools";
import Process from "@/components/Process";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Tools />
      <Process />
      <About />
      <FinalCTA />
    </>
  );
}
