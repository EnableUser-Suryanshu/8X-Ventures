import type { NextConfig } from "next";

/** The old Webflow site's sitemap (8xventures.co, October 2026), mapped onto
 *  this site so links and search results pointing at the old URLs land on the
 *  matching page instead of a 404 once the domain moves over. */
const OLD_SITE_REDIRECTS = [
  { source: "/8xventures-lpday", destination: "/media/lp-day" },

  /* The three posts brought over keep their text; the rest of the old blog
     has no page here yet, so those go to the listing. */
  {
    source: "/blog/strong-patent-strategy",
    destination: "/media/why-startups-must-invest-in-a-strong-patent-strategy",
  },
  {
    source: "/blog/transforming-india",
    destination: "/media/transforming-indias-water-sanitation-and-hygiene-landscape",
  },
  {
    source: "/blog/drone-startups",
    destination: "/media/me-too-drone-startups-a-boon-or-bane-for-the-industry",
  },
  { source: "/blog/:slug*", destination: "/media" },

  /* Team profiles kept the same id; the two people no longer listed go to
     the team page. */
  {
    source:
      "/investor/:id(chirag-gupta|esha-arya|vinod-agarwal|ajay-singh-rajput|shreya-kothari|kirthivasan-suresh|rashi-jain)",
    destination: "/team/:id",
  },
  { source: "/investor/:id*", destination: "/team" },

  /* Companies whose slug changed, then the ones no longer in the portfolio.
     The rest kept their slug and need nothing. */
  { source: "/portfolio/pantherun-technologies", destination: "/portfolio/pantherun" },
  { source: "/portfolio/neuralzome-cybernatics", destination: "/portfolio/neuralzome" },
  { source: "/portfolio/oditly-technologies", destination: "/portfolio/oditly" },
  {
    source:
      "/portfolio/:slug(atmax-technologies|courseplay|devnagri|docker-vision|medisim-vr|oorja-development-solutions|simactricals|supportroom|swapp-design|toppersnotes)",
    destination: "/portfolio",
  },
];

const nextConfig: NextConfig = {
  redirects() {
    return OLD_SITE_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
