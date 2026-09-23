"use client";
import { AppsContext } from "@/context/AppsProvider";
import { IApp } from "@/types/apps.type";
import { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";

const DownloadButton = ({ app }: { app: IApp }) => {
  const { installedApp, setInstalledApp } = useContext(AppsContext);

  const alreadyAdded = installedApp.some(
    (includedApp) => includedApp.id === app.id,
  );

  const handleInstallButton = () => {
    toast.success(`Added ${app.companyName}`, {
      position: "bottom-right",
    });
    setInstalledApp([...installedApp, app]);
  };
  return (
    <button
      onClick={() => handleInstallButton()}
      className="  disabled:bg-gray-500 disabled:text-gray-100 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer mt-1.5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#6b35e5] px-6 py-3 font-semibold text-white transition hover:bg-[#5928c7] sm:w-fit"
      disabled={alreadyAdded}
    >
      <FaDownload />
      {alreadyAdded === true ? "Downloaded" : "Download App"} ({app.size} MB)
    </button>
  );
};

export default DownloadButton;
