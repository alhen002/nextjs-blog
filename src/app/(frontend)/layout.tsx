import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Main from "@/components/Main";
import Providers from "@/app/(frontend)/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Henting",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Main>
            <Navigation />
            {children}
          </Main>
        </Providers>
      </body>
    </html>
  );
}
