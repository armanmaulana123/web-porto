import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arman Maulana Saputra — Backend Software Engineer",
  description:
    "Backend Software Engineer with 2+ years of experience building scalable web and IoT-based systems with Node.js, TypeScript, PostgreSQL, and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
