import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sulavtimalsina.com.np"),
  title: "Sulav Timalsina",
  description:
    "Founder, operator, and applied AI researcher based in Bhaktapur, Nepal. SAS Industries, CQ Tech, KanoonAI, and Lost Voices, an AI voice for the Sunuwar language.",
  openGraph: {
    title: "Sulav Timalsina",
    description:
      "Founder, operator, and applied AI researcher based in Bhaktapur, Nepal.",
    url: "https://sulavtimalsina.com.np",
    siteName: "Sulav Timalsina",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="grain min-h-full flex flex-col bg-background text-foreground selection:bg-accent">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
