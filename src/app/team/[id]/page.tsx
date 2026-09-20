import { Metadata } from "next";
import { TeamMemberPage } from "@/components/team/TeamMemberPage";
import { teamPartners, teamGroup, type Person } from "@/content/team";

export function generateStaticParams() {
  const allPeople: Person[] = [...teamPartners.people, ...teamGroup.people];
  return allPeople.map((person) => ({
    id: person.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const person = [...teamPartners.people, ...teamGroup.people].find((p) => p.id === id);

  if (!person) {
    return {
      title: "Team Member Not Found | 8X Ventures",
    };
  }

  /* Four of the team are on file as a photograph and a name only, so the
     description is built from whatever of the two is actually there. */
  const description = [person.role, person.bio && `${person.bio.slice(0, 120)}...`]
    .filter(Boolean)
    .join(" — ");

  return {
    title: `${person.name} | 8X Ventures`,
    description: description || `${person.name} at 8X Ventures.`,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = [...teamPartners.people, ...teamGroup.people].find((p) => p.id === id);

  if (!person) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <p className="text-ink-700 text-xl">Team member not found.</p>
      </div>
    );
  }

  return <TeamMemberPage person={person} />;
}
