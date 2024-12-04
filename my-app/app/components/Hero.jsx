import Image from "next/image";

const Hero = ({ luckyFont, robotoFont }) => {
  return (
    <div>
      <div className="sm:flex    ">
        <Image
          src="/hero-image_1.png"
          alt="burger image "
          width={250}
          height={450}
          className={`" justify-self-center sm:hidden block  "`}
        />
        <div className="flex flex-col justify-between ">
          <div>
            <h1
              className={` ${luckyFont.className} uppercase text-2xl sm:text-5xl `}
            >
              {" "}
              DELICIOUS <span className="text-[#FF870F]">QUALITY</span> AND{" "}
              <span className="text-[#FF870F]">TASTE</span> FOOD FOR EVERYONE{" "}
            </h1>
            <p
              className={` ${robotoFont.className} text-lg my-3 sm:block hidden text-zinc-400 `}
            >
              {" "}
              De la nouriture de qualité , un gout unique , des prix unique et
              un service de livaison qualifié{" "}
            </p>
          </div>

          <button
            className={` ${luckyFont.className} text-xl sm:text-2xl bg-[#FF870F] w-fit  rounded-2xl py-2 px-4 `}
          >
            {" "}
            order now{" "}
          </button>
        </div>

        <Image
          src="/hero-image_1.png"
          alt="burger image "
          width={350}
          height={450}
          className={`" my-auto sm:block hidden  "`}
        />
      </div>
    </div>
  );
};

export default Hero;
