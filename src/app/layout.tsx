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

export const metadata: Metadata = {
  title: "Mualen Jerry Baada — Full Stack Developer & Product Builder",
  description:
    "Full stack developer and technical support specialist building digital platforms, mobile apps, and web products—Flutter, Next.js, TypeScript, WordPress.",
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
