import { IApp, Rating } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaRegStar, FaStar } from "react-icons/fa";
import DownloadButton from "../app-details-button/DownloadButton";

const AppDetailsCard = ({ app }: { app: IApp }) => {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <Link href={"/apps"}>
        <button className="cursor-pointer font-semibold mb-3 ml-1">Back</button>
      </Link>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        {/* Top Section */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* App Image */}
          <div className="shrink-0">
            <Image
              src={app.image}
              width={240}
              height={240}
              alt={app.title}
              className="h-48 w-48 rounded-2xl object-cover md:h-56 md:w-56"
            />
          </div>

          {/* App Information */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#001931] md:text-3xl">
              {app.title}
            </h1>

            <p className="mt-2 text-gray-500">
              Developed by{" "}
              <span className="font-semibold text-[#001931]">
                {app.companyName}
              </span>
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {/* Downloads */}
              <div>
                <FaDownload className="text-[#6b35e5]" />
                <p className="mt-2 text-sm text-gray-500">Downloads</p>
                <p className="font-bold text-[#001931]">{app.downloads}</p>
              </div>

              {/* Rating */}
              <div>
                <FaStar className="text-yellow-400" />
                <p className="mt-2 text-sm text-gray-500">Rating</p>
                <p className="font-bold text-[#001931]">{app.ratingAvg}</p>
              </div>

              {/* Reviews */}
              <div>
                <FaRegStar className="text-[#6b35e5]" />
                <p className="mt-2 text-sm text-gray-500">Reviews</p>
                <p className="font-bold text-[#001931]">{app.reviews}</p>
              </div>

              {/* Size */}
              <div>
                <p className="text-lg font-bold text-[#6b35e5]">MB</p>
                <p className="mt-2 text-sm text-gray-500">App Size</p>
                <p className="font-bold text-[#001931]">{app.size} MB</p>
              </div>
            </div>

            {/* Download Button */}

            <DownloadButton app={app}></DownloadButton>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-[#001931]">Ratings</h2>

          <div className="mt-5 space-y-3">
            {app.ratings
              .slice()
              .reverse()
              .map((rating: Rating) => (
                <div key={rating.name} className="flex items-center gap-4">
                  <div className="flex w-20 items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium">
                      {rating.name.replace(" star", "")}
                    </span>
                  </div>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#6b35e5]"
                      style={{
                        width: `${
                          (rating.count /
                            Math.max(
                              ...app.ratings.map((item: Rating) => item.count),
                            )) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <span className="w-20 text-right text-sm text-gray-500">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-[#001931]">Description</h2>

          <p className="mt-4 leading-7 text-gray-600">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsCard;
