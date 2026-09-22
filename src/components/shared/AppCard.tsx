import { IApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const AppCard = ({ app }: { app: IApp }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* App Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={app.image}
          width={300}
          height={200}
          alt={app.title}
          className="h-48 w-full object-cover"
        />
      </div>

      {/* App Info */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-[#001931]">{app.title}</h2>

        <div className="mt-3 flex items-center justify-between">
          {/* Downloads */}
          <div>
            <p className="text-xs text-gray-500">Downloads</p>
            <p className="font-semibold text-gray-800">{app.downloads}</p>
          </div>

          {/* Rating */}
          <div className="text-right">
            <p className="text-xs text-gray-500">Rating</p>

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-gray-800">
                {app.ratingAvg}
              </span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Link href={`apps/${app.id}`}>
          <button className="cursor-pointer mt-5 w-full rounded-lg bg-[#6b35e5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5928c7]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
