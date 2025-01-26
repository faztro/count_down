import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countdown Website",
  description: "A beautiful countdown timer with likes",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#004d40" />
      </head>
      <body>{children}</body>
    </html>
  );
}
