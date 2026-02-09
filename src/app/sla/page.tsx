import type { Metadata } from "next";
import SLA from "@/views/legal/SLA";

export const metadata: Metadata = {
  title: "Service Level Agreement",
  description: "ByteNodes Service Level Agreement (SLA).",
};

export default function SLAPage() {
  return <SLA />;
}
