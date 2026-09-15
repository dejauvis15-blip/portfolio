import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Process — Jauvis Dozier",
  description: "How I approach a design project, from discovery to delivery.",
};

export default function ProcessPage() {
  return <Process />;
}
