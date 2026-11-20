import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { SITE_URL } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
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
    "Mobile App Developer",
    "React Developer",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Prachi Gupta",
    url: "/",
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
      <head>
        {/* Hide the intro overlay before first paint for returning visitors
            (same session) or when reduced motion is requested. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("portfolio_intro_seen")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.setAttribute("data-skip-intro","")}}catch(e){}`,
          }}
        />
        <PersonJsonLd />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
