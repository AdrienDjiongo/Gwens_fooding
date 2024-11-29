import { Instagram, Facebook, Mail } from "lucide-react";

const Contact = ({ luckyFont, robotoFont }) => {
  return (
    <div className="flex justify-between mt-8 mb-3 bg-[#D9D9D9] py-6 px-24 -mx-4">
      <div>
        <h1 className={` ${luckyFont.className} text-3xl `}>Information</h1>
        <p className={` ${robotoFont.className} font-semibold text-xl `}>
          Cameroun, Douala-logpom, fin goudron basson
        </p>
        <p className={` ${robotoFont.className} font-semibold text-xl `}>
          call us now 693-455-599
        </p>
      </div>
      <div className="flex justify-around">
        <Instagram size={70} strokeWidth={1.3} />
        <Facebook size={70} strokeWidth={1.3} />
        <Mail size={70} strokeWidth={1.3} />
      </div>
    </div>
  );
};

export default Contact;
