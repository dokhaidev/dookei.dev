import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  icons: {
    icon: [{ url: "favicon.svg", type: "image/svg+xml" }],
    shortcut: "favicon.svg",
    apple: "favicon.svg",
  },
  title: {
    default: "Richard Huynh (dokhaidev) — Frontend Software Engineer",
    template: "%s · Richard Huynh (dokhaidev)",
  },
  description:
    "Frontend Software Engineer portfolio by Richard Huynh (dokhaidev): projects, experience, skills, and contact details.",
  metadataBase: new URL("https://dokhaidev.github.io/dookei.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Richard Huynh (dokhaidev) — Frontend Software Engineer",
    description:
      "Frontend Software Engineer portfolio by Richard Huynh (dokhaidev): projects, experience, skills, and contact details.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Huynh (dokhaidev) — Frontend Software Engineer",
    description:
      "Frontend Software Engineer portfolio by Richard Huynh (dokhaidev): projects, experience, skills, and contact details.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
