import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  const domain = (headersList.get("host") as string) || "localhost:3000";
  const protocol = domain.includes("localhost") ? "http" : "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
  ];
}
