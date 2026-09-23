import footerLogo from "@/assets/logo.png";
import Image from "next/image";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" px-4 bg-[#001931] py-2 text-[#e2e5e7] mt-10 ">
      <div className=" container mx-auto  flex items-center justify-between border-b border-[#b0b2b5]  ">
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            width={30}
            height={30}
            alt="footer logo"
          ></Image>
          <span>HERO.IO</span>
        </div>
        <div>
          <span>Social Links</span>
          <ul className="flex items-center gap-2">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <CiLinkedin />
            </li>
            <li>
              <CiFacebook />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
