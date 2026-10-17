import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

/** `/robots.txt` — everything may be crawled; the sitemap says what to index. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
