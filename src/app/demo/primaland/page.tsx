import type { Metadata } from "next";
import { PrimaLandDemo } from "@/components/demo/PrimaLandDemo";

export const metadata: Metadata = {
  title: "PrimaLand — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <PrimaLandDemo />;
}
