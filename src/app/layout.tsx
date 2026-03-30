import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { themeInitScriptContent } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const portfolioTitle = "Mualen Jerry Baada | Full Stack Developer";
const portfolioDescription =
  "Full Stack Developer and Technical Support professional building practical digital platforms including FixiMami, Nestorics, and product-driven web solutions.";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);

const ogUrl = new URL("/", metadataBase).toString();

export const metadata: Metadata = {
  title: portfolioTitle,
  description: portfolioDescription,
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Technical Support Engineer",
    "Software Engineer Portfolio",
    "Ghana Developer",
  ],
  icons: { icon: "/favicon.ico" },
  metadataBase,
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    url: ogUrl,
    images: [{ url: "/portfolio-preview.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh flex flex-col antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScriptContent() }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
