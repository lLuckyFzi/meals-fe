import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import PublicHeader from "../layouts/PublicHeader";
import PublicFooter from "../layouts/PublicFooter";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meals",
  description: "Good mood with food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>
        <PublicHeader />
        {children}
        <PublicFooter />
      </body>
    </html>
  );
}
