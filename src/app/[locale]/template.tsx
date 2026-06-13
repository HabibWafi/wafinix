"use client";

import { PageTransition } from "@/components/layout/PageTransition";

// template.tsx re-mounts on every navigation, so the enter animation replays
// per page (unlike layout.tsx which persists). See docs/DESIGN-SPEC.md.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
