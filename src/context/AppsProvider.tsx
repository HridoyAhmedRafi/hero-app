"use client";
import { IApp } from "@/types/apps.type";
import React, { createContext, ReactNode, useState } from "react";

interface IAppsContext {
  installedApp: IApp[];
  setInstalledApp: React.Dispatch<React.SetStateAction<IApp[]>>;
}

export const AppsContext = createContext<IAppsContext>({
  installedApp: [],
  setInstalledApp: () => {},
});

const AppsProvider = ({ children }: { children: ReactNode }) => {
  const [installedApp, setInstalledApp] = useState<IApp[]>([]);

  const sharedData = {
    installedApp,
    setInstalledApp,
  };

  return (
    <AppsContext.Provider value={sharedData}>{children}</AppsContext.Provider>
  );
};

export default AppsProvider;
