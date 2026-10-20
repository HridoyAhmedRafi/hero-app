import AppDetailsCard from "@/components/shared/AppDetailsCard";
import apps from "@/data/apps";
import { notFound } from "next/navigation";

interface AppDetailsPageProps {
  params: Promise<{ appId: string }>;
}

const AppDetailsPage = async ({ params }: AppDetailsPageProps) => {
  const { appId } = await params;
  const app = apps.find((app) => String(app.id) === appId);
  if (!app) notFound();
  return (
    <div className="container mx-auto px-4">
      <AppDetailsCard app={app}></AppDetailsCard>
    </div>
  );
};

export default AppDetailsPage;
