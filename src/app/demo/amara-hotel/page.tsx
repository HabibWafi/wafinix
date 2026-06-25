import type { Metadata } from "next";
import { AmaraDemo } from "@/components/demo/AmaraDemo";

export const metadata: Metadata = {
  title: "Amara Hotel — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <AmaraDemo />;
}
