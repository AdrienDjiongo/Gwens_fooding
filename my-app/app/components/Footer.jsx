import Image from "next/image";

const Footer = ({ luckyFont, robotoFont }) => {
  return (
    <div className="flex bg-black py-10 pl-6 -mx-4  text-white">
      <div className="  flex flex-col z-20 ">
        <div className="grid grid-cols-6">
          <h1
            className={` ${luckyFont.className}  text-2xl sm:text-8xl col-span-6 text-[#FD7E14]`}
          >
            Dear customer
          </h1>

          <h2
            className={` ${luckyFont.className}  text-xs sm:text-xl col-span-4 sm:col-span-5 font-semibold`}
          >
            we work hard to make all of you satisfy, see the smile on your face
            give us
          </h2>
          <h2
            className={` ${luckyFont.className} text-xs sm:text-xl col-span-6 text-[#00A850] font-semibold`}
          >
            peace of mind{" "}
          </h2>
          <p
            className={` ${luckyFont.className} text-[7px] sm:text-sm  col-span-5 font-semibold`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            maiores! Consequatur recusandae corrupti possimus iure quibusdam
            voluptatem veritatis?
          </p>
        </div>
      </div>
      <Image
        className=" sm:block hidden "
        src="/footer-burger.png"
        alt="burger image "
        width={1300}
        height={450}
      />
      <Image
        className=" sm:hidden block"
        src="/footer-burger.png"
        alt="burger image "
        width={200}
        height={45}
      />
    </div>
  );
};

export default Footer;
