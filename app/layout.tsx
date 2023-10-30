import "./globals.css";
import { Providers } from "@/redux-store/provider";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AQ Online Quran Academy",
  description:
    "AQ Online Quran Academy is an Online Educational Institution that has been Providing Quranic Education to Students Around the World for the Past 10 years. We ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // className={`scroll-smooth ${inter.className}`}
        className={`scroll-smooth font-Inter`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
