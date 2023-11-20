import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const IMPORTANT_PAGES = [
    { id: "events_by_person_id", title: "Events by person ID" },
    { id: "events_by_link_id", title: "Events by link id" },
    { id: "show_link_details", title: "Show link details" },
    { id: "events_in_a_time_range", title: "Events in a time range" },
  ];

  return (
    <main className="flex min-h-screen space-y-3 flex-col items-center justify-center bg-slate-800">
      {IMPORTANT_PAGES.map((pageLinkInfo) => (
        <Link
          key={pageLinkInfo.id}
          href={`/${pageLinkInfo.id}`}
          className="text-slate-200 p-4 px-10 border rounded-md"
        >
          {`GO to ${pageLinkInfo.title} page`}
        </Link>
      ))}
    </main>
  );
}
