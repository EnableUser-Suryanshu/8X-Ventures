import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "A Portfolio of Frontier Builders",
  description: "We back companies creating new capabilities across DeepTech sectors.",
};

export default function Page() {
  return <PortfolioPage />;
}
