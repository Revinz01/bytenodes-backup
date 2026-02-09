import type { Metadata } from "next";
import RefundPolicy from "@/views/legal/RefundPolicy";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "ByteNodes Refund Policy.",
};

export default function RefundPage() {
  return <RefundPolicy />;
}
