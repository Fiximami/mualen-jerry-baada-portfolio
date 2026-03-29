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

const title = "Mualen Jerry Baada | Full Stack Developer";
const description =
  "Full Stack Developer and Technical Support professional building practical digital platforms including FixiMami, Nestorics, and product-driven web solutions.";

const site =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Technical Support Engineer",
    "Software Engineer Portfolio",
    "Ghana Developer",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    images: [{ url: "/profile/mualen-jerry-baada.jpeg", alt: title }],
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
