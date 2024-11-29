import Image from "next/image";
import { Roboto_Serif, Luckiest_Guy } from "next/font/google";

const robotoSerif = Roboto_Serif({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const luckiestGuy = Luckiest_Guy({
  weight: ["400"], // Luckiest Guy typically has a single weight
  subsets: ["latin"],
});

const Menu = () => {
  return (
    <div className="grid grid-cols-12 gap-3 my-10">
      <div className="col-span-4 rounded-2xl overflow-hidden bg-[#00A850]">
        <div className="flex">
          <div className=" my-2 ">
            <div className="ml-4">
              <h1
                className={` ${luckiestGuy.className} text-5xl text-white   py-2 `}
              >
                Pizza
              </h1>
              <p
                className={` ${robotoSerif.className} text-xl my-3 font-semibold text-white `}
              >
                amateur de burger ? decouvrez nos incroyables menu appetissant ,
                croquant a s’en lecher les doigt{" "}
              </p>
            </div>
          </div>

          <img
            src="/menu-burger.png"
            alt="burger image "
            className="w-[100px] h-[300px] "
          />
        </div>
        <button
          className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
        >
          View menu
        </button>
      </div>
      <div className="col-span-4 rounded-2xl overflow-hidden bg-[#FD7E14]">
        <div className="flex">
          <div className=" my-2 ">
            <div className="ml-4">
              <h1
                className={` ${luckiestGuy.className} text-5xl text-white   py-2 `}
              >
                Pizza
              </h1>
              <p
                className={` ${robotoSerif.className} text-xl my-3 font-semibold text-white `}
              >
                ne manquez pas nos pizza au gout unique comme nul part ailleurs
              </p>
            </div>
          </div>

          <img
            src="/menu-pizza.png"
            alt="pizza image "
            className="w-[100px] h-[300px] "
          />
        </div>
        <button
          className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
        >
          View menu
        </button>
      </div>
      <div className="col-span-4 rounded-2xl overflow-hidden bg-[#FD7E14]">
        <div className="flex">
          <div className=" my-2 ">
            <div className="ml-4">
              <h1
                className={` ${luckiestGuy.className} text-5xl text-white   py-2 `}
              >
                Chicken
              </h1>
              <p
                className={` ${robotoSerif.className} text-xl my-3 font-semibold text-white `}
              >
                le croquant de nos delicieux morceaux de poulets pané{" "}
              </p>
            </div>
          </div>

          <img
            src="/menu-chicken.png"
            alt="chicken image "
            className="w-[100px] h-[300px] "
          />
        </div>
        <button
          className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
        >
          View menu
        </button>
      </div>

      <div className="col-span-5 rounded-2xl overflow-hidden bg-[#0049A8]">
        <div className="flex">
          <div className=" my-2 w-fit ">
            <div className="ml-4">
              <h1
                className={` ${luckiestGuy.className} text-5xl text-white   py-2 `}
              >
                Loaded-fries
              </h1>
              <p
                className={` ${robotoSerif.className} text-xl my-3 font-semibold text-white `}
              >
                le croquant de nos delicieux morceaux de poulets pané{" "}
              </p>
            </div>
          </div>

          <img
            src="/menu-chicken.png"
            alt="  "
            className="w-[200px] h-[350px] "
          />
        </div>
        <button
          className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
        >
          View menu
        </button>
      </div>
      <div className="col-span-4 rounded-2xl overflow-hidden bg-[#8C00A8]">
        <div className="flex">
          <div className=" my-2 w-fit ">
            <div className="ml-4">
              <h1
                className={` ${luckiestGuy.className} text-5xl text-white   py-2 `}
              >
                Fresh Sirop
              </h1>
              <p
                className={` ${robotoSerif.className} text-xl my-3 font-semibold text-white `}
              >
                le croquant de nos delicieux morceaux de poulets pané{" "}
              </p>
            </div>
          </div>

          <img
            src="/menu-chicken.png"
            alt="  "
            className="w-[200px] h-[350px] "
          />
        </div>
        <button
          className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
        >
          View menu
        </button>
      </div>
      <div className="col-span-3 rounded-2xl overflow-hidden p-4 bg-[#E9ECEB]">
        <div className="flex flex-col justify-between gap-10">
          <h1 className={` ${luckiestGuy.className} text-5xl  py-2 `}>
            Discover more here
          </h1>

          <button
            className={` ${luckiestGuy.className} text-2xl bg-[#383838] w-fit mt-auto justify-self-center mb-4 rounded-2xl ml-8 py-2 px-4 `}
          >
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
