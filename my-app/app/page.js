import Image from "next/image";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { Roboto_Serif, Luckiest_Guy } from "next/font/google";
const luckiestGuy = Luckiest_Guy({
  weight: ["400"], // Luckiest Guy typically has a single weight
  subsets: ["latin"],
});
const robotoSerif = Roboto_Serif({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className=" bg-[url('/bg-hero.png')] px-4 pt-8 ">
      <Hero luckyFont={luckiestGuy} robotoFont={robotoSerif} />
      <Menu luckyFont={luckiestGuy} robotoFont={robotoSerif} />
      <Footer luckyFont={luckiestGuy} robotoFont={robotoSerif} />
      <Contact luckyFont={luckiestGuy} robotoFont={robotoSerif} />
    </div>
  );
}
