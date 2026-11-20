import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0d14" },
    { media: "(prefers-color-scheme: light)", color: "#f3f3f8" },
  ],
};

const SITE_TITLE = "Prachi Gupta — Frontend & React Native Engineer";
const SITE_DESCRIPTION =
  "Portfolio of Prachi Gupta, a Frontend & React Native Engineer with 2+ years of experience shipping production web and mobile apps with React, React Native, and TypeScript.";

// Set NEXT_PUBLIC_SITE_URL to the deployed domain so social previews use absolute URLs.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Prachi Gupta" }],
  keywords: [
    "Prachi Gupta",
    "Frontend Engineer",
    "React Native Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Prachi Gupta",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={bricolageGrotesque.variable}
    >
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
