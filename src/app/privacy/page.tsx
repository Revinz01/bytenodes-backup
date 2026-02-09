import type { Metadata } from "next";
import PrivacyPolicy from "@/views/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ByteNodes Privacy Policy - How we handle your data.",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
