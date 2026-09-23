import footerLogo from "@/assets/logo.png";
import Image from "next/image";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" px-4 bg-white py-2 text-[#99a1c1] mt-10 ">
      <div className=" container mx-auto px-4 flex items-center justify-between border-b border-[#99a1c13a]  ">
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            width={30}
            height={30}
            alt="footer logo"
          ></Image>
          <span className="text-[14px]">HERO.IO</span>
        </div>
        <div>
          <ul className="flex items-center gap-2 ">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <CiLinkedin />
            </li>
            <li>
              <CiFacebook />
            </li>
            <li className="text-[10px] font-bold">
              DEV BY <span className="text-[#6B35E5]">HRIDOY</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 text-[14px]">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
