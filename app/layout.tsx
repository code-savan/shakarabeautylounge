import type { Metadata } from "next";
import { Figtree, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  weight: "300", // Figtree light
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: "400", // Need regular for links
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shakara Beauty Lounge | Luxury Beauty & Wellness in Abuja",
  description: "Experience premium beauty services at Shakara Beauty Lounge. Hair styling, nails, spa treatments, lashes, makeup, and bridal packages. Book your appointment today!",
  keywords: "beauty salon, hair styling, nails, spa, lashes, makeup, bridal, Abuja, Nigeria",
  authors: [{ name: "Shakara Beauty Lounge" }],
  openGraph: {
    title: "Shakara Beauty Lounge | Luxury Beauty & Wellness",
    description: "Premium beauty services in Abuja. Hair, nails, spa, lashes, makeup & bridal packages.",
    type: "website",
  },
  icons: {
    icon: "/favicon.jpeg",
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
      className={`${figtree.variable} ${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
