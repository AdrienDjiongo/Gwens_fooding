import Image from "next/image";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Luckiest_Guy, Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const luckiestGuy = Luckiest_Guy({
  weight: ["400"], // Luckiest Guy typically has a single weight
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className=" bg-[url('/bg-hero.png')] px-4 pt-8  ">
      <div className="max-w-[1260px] mx-auto ">
        {" "}
        <Hero luckyFont={luckiestGuy} robotoFont={robotoSerif} />
        <Menu luckyFont={luckiestGuy} robotoFont={robotoSerif} />
        <Footer luckyFont={luckiestGuy} robotoFont={robotoSerif} />
        <Contact luckyFont={luckiestGuy} robotoFont={robotoSerif} />
      </div>
    </div>
  );
}
