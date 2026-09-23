"use client";
import InstalledAppCard from "@/components/shared/InstalledAppCard";
import { AppsContext } from "@/context/AppsProvider";
import { IApp } from "@/types/apps.type";
import Link from "next/link";
import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";

const InstallationPage = () => {
  const { installedApp } = useContext(AppsContext);

  return (
    <div className="container mx-auto px-4 my-20 space-y-2  ">
      <Link href={"/apps"}>
        <MdArrowBackIos />
      </Link>
      <h1 className="text-[#001931] font-bold text-[27px] md:text-5xl text-center">
        Your Installed Apps
      </h1>
      <p className="text-[#627382] text-[14px] text-[20px] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="text-center md:text-left mt-5">
        <span className="text-[#001931] text-[24px] font-semibold">{`(${installedApp.length}) Apps Found`}</span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3">
        {installedApp.map((app: IApp) => (
          <InstalledAppCard app={app} key={app.id}></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default InstallationPage;
