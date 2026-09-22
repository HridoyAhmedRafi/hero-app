import { IApp } from "@/types/apps.type";
import AppCard from "../shared/AppCard";

const getApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const TrendingApps = async () => {
  const apps = await getApps();
  return (
    <div className="container mx-auto px-4 mt-15">
      <h1 className="text-[#001931] text-[40px] font-bold text-center">
        Trending Apps
      </h1>
      <p className="text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-5 cursor-pointer mt-10">
        {apps.slice(0,8).map((app: IApp) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
