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

const SITE_URL = "https://ssps.om";
const SITE_NAME = "SSPS";
const SITE_DESCRIPTION =
  "Seven Star Petroleum Services LLC — Full-spectrum oilfield services provider in Oman. Drilling & well services, equipment trading, rig maintenance, electrical & instrumentation, and pipeline construction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SSPS — Seven Star Petroleum Services | Oilfield Services in Oman",
    template: "%s | SSPS",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SSPS",
    "Seven Star Petroleum Services",
    "oilfield services Oman",
    "drilling services Oman",
    "well drilling Oman",
    "workover rigs",
    "pipeline construction",
    "electrical instrumentation oil gas",
    "rig maintenance",
    "petroleum services Muscat",
    "oil well drilling",
    "water well drilling",
    "mining well drilling",
    "mud pumps",
    "drilling rig components",
    "high voltage installations",
    "substation construction",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SSPS — Seven Star Petroleum Services",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
