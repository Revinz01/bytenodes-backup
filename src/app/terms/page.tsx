import type { Metadata } from "next";
import TermsOfService from "@/views/legal/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ByteNodes Terms of Service - Read our terms and conditions.",
};

export default function TermsPage() {
  return <TermsOfService />;
}
