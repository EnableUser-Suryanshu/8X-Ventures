import { Metadata } from "next";
import { PortfolioDetail } from "@/components/portfolio/PortfolioDetail";
import { portfolioCards } from "@/content/portfolio";

export function generateStaticParams() {
  return portfolioCards.map((company) => ({
    slug: company.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = portfolioCards.find((c) => c.id === slug);

  if (!company) {
    return {
      title: "Company Not Found | 8X Ventures",
    };
  }

  return {
    title: `${company.name} | 8X Ventures`,
    description: `${company.sector} — ${company.description}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PortfolioDetail id={slug} />;
}
