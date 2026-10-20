import appsData from "@/data/apps.json";
import type { IApp } from "@/types/apps.type";

// Imported at build time, so there is no runtime HTTP request for app data.
const apps: IApp[] = appsData;

export default apps;
