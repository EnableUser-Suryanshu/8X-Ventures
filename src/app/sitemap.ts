import type { MetadataRoute } from "next";
import { portfolioCards } from "@/content/portfolio";
import { articles } from "@/content/perspectives";
import { siteConfig } from "@/content/site";
import { teamGroup, teamPartners } from "@/content/team";

/**
 * `/sitemap.xml` — every page on the site that should be in search, built
 * from the same content the pages render from, so a new person, company or
 * article is listed the moment it exists.
 *
 * Only canonical URLs: the old site's addresses (which redirect, see
 * `next.config.ts`) and the LP Day aliases are left out, since a sitemap that
 * lists redirects is what Search Console reports as "Page with redirect".
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/team",
    "/portfolio",
    "/media",
    "/media/lp-day",
    "/contact",
    "/disclosures",
    "/disclaimer",
    "/privacy",
    "/terms",
    "/refund-policy",
    ...[...teamPartners.people, ...teamGroup.people].map((p) => `/team/${p.id}`),
    ...portfolioCards.map((c) => `/portfolio/${c.id}`),
    ...articles.map((a) => `/media/${a.slug}`),
  ];

  return pages.map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
  }));
}
