import type { Metadata } from "next";
import CookiePolicy from "@/views/legal/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ByteNodes Cookie Policy - How we use cookies.",
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
