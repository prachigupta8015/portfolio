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

export const metadata: Metadata = {
  title: "Prachi Gupta — Frontend & React Native Engineer",
  description:
    "Portfolio of Prachi Gupta, a Frontend & React Native Engineer with 2+ years of experience shipping production web and mobile apps with React, React Native, and TypeScript.",
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
