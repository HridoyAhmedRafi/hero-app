import AppDetailsCard from "@/components/shared/AppDetailsCard";
import { IApp } from "@/types/apps.type";

interface AppDetailsPageProps {
  params: Promise<{ appId: string }>;
}

const getApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AppDetailsPage = async ({ params }: AppDetailsPageProps) => {
  const { appId } = await params;
  const apps = await getApps();
  const app = apps.find((app: IApp) => String(app.id) === appId);
  return (
    <div className="container mx-auto px-4">
      <AppDetailsCard app={app}></AppDetailsCard>
    </div>
  );
};

export default AppDetailsPage;
