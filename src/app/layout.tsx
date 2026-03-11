import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass by Regen — Impact Intelligence Platform",
  description:
    "The impact data platform purpose-built for claims. Ingest, verify, and deploy ecological and social data with AI tools and blockchain traceability.",
  openGraph: {
    title: "Compass by Regen",
    description: "Turn impact data into decisions, revenue, and trust.",
    url: "https://compass.regen.network",
    siteName: "Compass by Regen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compass by Regen — Impact Intelligence Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800;900&family=Lato:wght@400;700&family=PT+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
