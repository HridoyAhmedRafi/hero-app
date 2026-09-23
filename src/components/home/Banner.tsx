import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import heroImage from "@/assets/hero.png";
import fact from "@/assets/Facts.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mt-15">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-5">
        <h1 className="text-[#001931] text-[40px] md:text-7xl font-bold text-center">
          We Build
          <br />
          <span className="text-[#6b35e5]">Productive</span> Apps
        </h1>

        <p className="text-[#627382] max-w-100 text-[14px] md:max-w-187.5 text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-2 ">
          <div className="flex items-center gap-2 px-4 py-2 border border-[#d0caca] rounded ">
            <IoLogoGooglePlaystore />
            <button className="text-[#001931] font-semibold cursor-pointer hover:text-[#6b35e5]">
              <span>Google Play</span>
            </button>
          </div>
          <div className="flex items-center gap-2 border px-4 py-2 border-[#d0caca] rounded ">
            <IoLogoAppleAppstore />
            <button className="text-[#001931] font-semibold cursor-pointer hover:text-[#6b35e5]">
              <span>App Store</span>
            </button>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt="hero image"></Image>
        </div>
      </div>
      <div>
        <div>
          <Image src={fact} alt="fact iamge" className="w-full"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
