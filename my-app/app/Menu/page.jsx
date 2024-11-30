import Image from "next/image";
import { Roboto_Serif, Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  weight: ["400"], // Luckiest Guy typically has a single weight
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={` ${luckiestGuy.className} `}>
      <div className=" bg-[url('/bg-menu.png')] h-64  ">
        <h1 className="text-6xl justify-self-center align-s pt-28 my-auto">
          <span className="text-[#FD7E14] ">Food</span>
          Menu
        </h1>
      </div>

      <div className=" bg-[url('/bg2-menu.png')] grid grid-cols-11 auto-rows-auto px-3 gap-8  pt-16 ">
        <div className="flex flex-col col-span-3 gap-1 text-3xl ">
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            Burger
          </p>
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            Pizza
          </p>
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            Loaded fries
          </p>
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            juices
          </p>
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            nems
          </p>
          <p className="bg-white border-[1px] rounded-lg px-3  border-[#FD7E14]">
            chicken
          </p>
        </div>
        <div className="col-span-8 grid grid-cols-2">
          <div className="grid justify-center gap-3 bg-[#FCFCFC] mx-6 pb-3 border-2 border-zinc-400 rounded-xl mb-3 ">
            <Image
              src="/menu2-burger.png"
              alt="burger image "
              width={300}
              height={250}
              className="justify-self-center"
            />
            <p className="justify-self-center">Cheese burger</p>
            <button
              className={` ${luckiestGuy.className} justify-self-center text-2xl bg-[#FF870F] w-fit  rounded-lg py-2 px-8 `}
            >
              {" "}
              Add to cart
            </button>
          </div>
          <div className="grid justify-center gap-3 bg-[#FCFCFC] mx-6 pb-3 border-2 border-zinc-400 rounded-sm mb-3 ">
            <Image
              src="/menu2-burger.png"
              alt="burger image "
              width={300}
              height={250}
              className="justify-self-center"
            />
            <p className="justify-self-center">Cheese burger</p>
            <button
              className={` ${luckiestGuy.className} justify-self-center text-2xl bg-[#FF870F] w-fit  rounded-lg py-2 px-8 `}
            >
              {" "}
              Add to cart
            </button>
          </div>

          <div className="grid justify-center gap-3 bg-[#FCFCFC] mx-6 pb-3 border-2 border-zinc-400 rounded-sm mb-3 ">
            <Image
              src="/menu2-burger.png"
              alt="burger image "
              width={300}
              height={250}
              className="justify-self-center"
            />
            <p className="justify-self-center">Cheese burger</p>
            <button
              className={` ${luckiestGuy.className} justify-self-center text-2xl bg-[#FF870F] w-fit  rounded-lg py-2 px-8 `}
            >
              {" "}
              Add to cart
            </button>
          </div>
          <div className="grid justify-center gap-3 bg-[#FCFCFC] mx-6 pb-3 border-2 border-zinc-400 rounded-sm mb-3 ">
            <Image
              src="/menu2-burger.png"
              alt="burger image "
              width={300}
              height={250}
              className="justify-self-center"
            />
            <p className="justify-self-center">Cheese burger</p>
            <button
              className={` ${luckiestGuy.className} justify-self-center text-2xl bg-[#FF870F] w-fit  rounded-lg py-2 px-8 `}
            >
              {" "}
              Add to cart
            </button>
          </div>
          <div className="grid justify-center gap-3 bg-[#FCFCFC] mx-6 pb-3 border-2 border-zinc-400 rounded-sm mb-3 ">
            <Image
              src="/menu2-burger.png"
              alt="burger image "
              width={300}
              height={250}
              className="justify-self-center"
            />
            <p className="justify-self-center">Cheese burger</p>
            <button
              className={` ${luckiestGuy.className} justify-self-center text-2xl bg-[#FF870F] w-fit  rounded-lg py-2 px-8 `}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
