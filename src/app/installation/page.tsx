"use client";
import InstalledAppCard from "@/components/shared/InstalledAppCard";
import { AppsContext } from "@/context/AppsProvider";
import { IApp } from "@/types/apps.type";
import { useContext } from "react";

const InstallationPage = () => {
  const { installedApp } = useContext(AppsContext);

  return (
    <div className="container mx-auto px-4 my-20 space-y-2 ">
      <h1 className="text-[#001931] font-bold text-5xl text-center">
        Your Installed Apps
      </h1>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <span className="text-[#001931] text-[24px] font-semibold">{`Apps Found`}</span>

      <div className="mt-5 grid grid-cols-1 gap-3">
        {installedApp.map((app: IApp) => (
          <InstalledAppCard app={app} key={app.id}></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default InstallationPage;
