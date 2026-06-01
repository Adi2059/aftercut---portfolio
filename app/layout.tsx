import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "../components/ui/CursorGlow";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfterCut — Professional Video Editing by Rishab Thakur",
  description:
    "Premium video editing for creators, brands and businesses. 5M+ views generated. YouTube editing, Reels, Commercial ads and Motion Graphics.",
  keywords: [
    "video editing",
    "YouTube editor",
    "reels editing",
    "AfterCut",
    "Rishab Thakur",
    "content creator editor",
    "professional video editor India",
    "short form video editing",
    "motion graphics",
  ],
  authors: [{ name: "Rishab Thakur" }],
  creator: "Rishab Thakur",
  metadataBase: new URL("https://aftercut.in"),

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aftercut.in",
    siteName: "AfterCut",
    title: "AfterCut — Professional Video Editing",
    description:
      "Turning raw footage into content that demands attention. Premium video editing for creators and brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AfterCut — Premium Video Editing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AfterCut — Professional Video Editing",
    description:
      "Premium video editing for creators, brands and businesses. 5M+ views generated.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      className={`${poppins.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <CursorGlow /> {/* <-- Aur yahan component add kiya hai */}
        {children}
      </body>
    </html>
  );
}