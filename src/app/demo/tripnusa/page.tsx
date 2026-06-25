import type { Metadata } from "next";
import { TripNusaDemo } from "@/components/demo/TripNusaDemo";

export const metadata: Metadata = {
  title: "TripNusa — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <TripNusaDemo />;
}
