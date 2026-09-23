"use client";
import { AppsContext } from "@/context/AppsProvider";
import { IApp } from "@/types/apps.type";
import { useContext } from "react";

const UninstallButton = ({ app }: { app: IApp }) => {
  const { installedApp, setInstalledApp } = useContext(AppsContext);

  const handleUninstallApp = () => {
    const ramainingApps = installedApp.filter(
      (includedApp) => includedApp.id !== app.id,
    );
    setInstalledApp(ramainingApps);
  };
  return (
    <div>
      <button
        onClick={() => handleUninstallApp()}
        className="shrink-0 cursor-pointer rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white sm:px-5"
      >
        Uninstall
      </button>
    </div>
  );
};

export default UninstallButton;
