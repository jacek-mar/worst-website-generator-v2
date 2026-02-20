import type { Metadata } from "next";
import BadNav from "@/components/shared/BadNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Force Awakens Website Generator",
  description: "A polished wizard that produces deliberately awful websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BadNav />
        <div style={{ paddingTop: '48px' }}>{children}</div>
      </body>
    </html>
  );
}
