import type { Metadata } from "next";
import PrivacyPolicy from "@/views/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy for ByteNodes",
  description:
    "How ByteNodes accesses, uses, stores, shares, and deletes Google user data.",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
