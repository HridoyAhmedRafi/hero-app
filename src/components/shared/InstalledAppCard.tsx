import { IApp } from "@/types/apps.type";
import Image from "next/image";
import { FaDownload, FaStar } from "react-icons/fa";

const InstalledAppCard = ({ app }: { app: IApp }) => {
  return (
    <div className=" rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex min-w-0 items-center gap-4">
          {/* App Logo */}
          <Image
            src={app.image}
            width={80}
            height={80}
            alt={app.title}
            className="h-16 w-16 shrink-0 rounded-2xl object-cover sm:h-20 sm:w-20"
          />

          {/* App Info */}
          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-[#001931] sm:text-lg">
              {app.title}
            </h2>

            <p className="mt-1 truncate text-sm text-gray-500">
              {app.companyName}
            </p>

            {/* App Stats */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 sm:text-sm">
              {/* Downloads */}
              <div className="flex items-center gap-1.5">
                <FaDownload className="text-[#6b35e5]" />
                <span>{app.downloads}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <FaStar className="text-yellow-400" />
                <span>{app.ratingAvg}</span>
              </div>

              {/* Size */}
              <div className="font-medium text-gray-600">{app.size} MB</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <button className="shrink-0 cursor-pointer rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white sm:px-5">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
