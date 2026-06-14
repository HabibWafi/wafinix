import type { Metadata } from "next";
import { DemoPage } from "@/components/demo/DemoPage";
import { demos } from "@/data/demos";

export const metadata: Metadata = {
  title: "PrimaLand — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <DemoPage c={demos["primaland"]} />;
}
