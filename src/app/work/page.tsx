import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkGallery } from "@/components/work/WorkGallery";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected graphic design by Namirah Tarannum: social and ad creative, brand and product campaigns, editorial posters, and food & beverage marketing.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work · 2020–2025"
        title={
          <>
            The pieces people
            <br />
            <span className="italic text-gilded">stopped for.</span>
          </>
        }
        intro="A curated wall of campaigns across food, beauty, fashion, tech, and automotive, each built to catch the eye and earn the click. Filter by discipline below."
      />
      <WorkGallery />
    </>
  );
}
