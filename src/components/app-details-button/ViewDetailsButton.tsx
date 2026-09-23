import { IApp } from "@/types/apps.type";
import Link from "next/link";

const InstallationButton = ({ app }: { app: IApp }) => {
  return (
    <div>
      {/* View Details Button */}
      <Link href={`apps/${app.id}`}>
        <button className="cursor-pointer mt-5 w-full rounded-lg bg-[#6b35e5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5928c7]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default InstallationButton;
