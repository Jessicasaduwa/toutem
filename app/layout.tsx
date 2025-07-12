import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toutem",
  description: "toutem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['SF_Pro_Text']">{children}</body>
    </html>
  );
}
