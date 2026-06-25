import type { Metadata } from "next";
import { EximTradeDemo } from "@/components/demo/EximTradeDemo";

export const metadata: Metadata = {
  title: "EximTrade — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <EximTradeDemo />;
}
