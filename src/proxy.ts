import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware` -> `proxy`. This handles locale negotiation
// and redirects. `admin` and `demo` are excluded so they stay non-localized.
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|admin|demo|.*\\..*).*)"],
};
