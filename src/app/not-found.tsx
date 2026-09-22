import notFoundImage from "@/assets/App-Error.png";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className=" my-15 flex flex-col justify-center items-center container mx-auto px-4 overflow-hidden">
      <div className="text-center">
        <div className="mx-auto">
          <Image
            src={notFoundImage}
            className="w-full max-w-87.5 h-auto mx-auto"
            alt="Not-Found Image"
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-[#001931] text-4xl font-bold">
            OOPS!! APP NOT FOUND
          </h1>

          <p className="text-[#627382b8] text-base">
            The App you are requesting is not found on our system. Please try
            another app.
          </p>

          <Link
            href="/"
            className="inline-block bg-[#6b35e5] text-white px-4 py-2 rounded"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
