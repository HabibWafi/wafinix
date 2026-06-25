import type { Metadata } from "next";
import { SajiraDemo } from "@/components/demo/SajiraDemo";

export const metadata: Metadata = {
  title: "Sajira — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <SajiraDemo />;
}
