import AppCard from "@/components/shared/AppCard";
import { IApp } from "@/types/apps.type";

const getApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AllAppsPage = async () => {
  const apps = await getApps();

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-[#001931] text-[30px] md:text-[40px] font-bold text-center">
        All Applications
      </h1>
      <p className="text-[#627382] text-center text-[14px] md:text-[16px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="text-center mt-5 md:text-left">
        <h2 className="text-[#001931] text-[22px] font-semibold ">
          ({apps.length}) Apps Found
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {apps.map((app: IApp) => (
          <AppCard app={app} key={app.id}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllAppsPage;
