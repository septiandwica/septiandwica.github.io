import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact | tyann.",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return <ContactContent />;
}
