import Image from "next/image";
import Link from "next/link";
import { type ArticleCardData } from "@/content/perspectives";

/**
 * An article card: the plate, then the kicker, the title and the date.
 *
 * Traced from the perspective frame's "Related articles" shelf (node 317-759)
 * and used in both places that list articles — that shelf, and the `/media`
 * listing — so the two cannot drift apart.
 *
 * Every article has a page of its own under `/media`, so the card is a `Link`.
 */
export function ArticleCard({ article }: { article: ArticleCardData }) {
  const inner = (
    <>
      <span className="ar-plate">
        <Image suppressHydrationWarning
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 1024px) 92vw, 28vw"
          className="ar-img"
        />
      </span>

      <span className="ar-kicker">{article.kicker}</span>
      <span className="ar-title">{article.title}</span>
      <span className="ar-date">{article.date}</span>
    </>
  );

  return (
    <Link href={article.href} className="ar">
      {inner}
    </Link>
  );
}
