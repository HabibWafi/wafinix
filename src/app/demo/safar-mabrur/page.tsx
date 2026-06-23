import type { Metadata } from "next";
import { SafarDemo } from "@/components/demo/SafarDemo";

export const metadata: Metadata = {
  title: "Safar Mabrur — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <SafarDemo />;
}
