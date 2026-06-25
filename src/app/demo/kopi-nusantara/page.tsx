import type { Metadata } from "next";
import { KopiDemo } from "@/components/demo/KopiDemo";

export const metadata: Metadata = {
  title: "Kopi Nusantara — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <KopiDemo />;
}
