import type { Metadata } from "next";
import AcceptableUse from "@/views/legal/AcceptableUse";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "ByteNodes Acceptable Use Policy.",
};

export default function AcceptableUsePage() {
  return <AcceptableUse />;
}
