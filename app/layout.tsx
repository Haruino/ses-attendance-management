import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Organism/Header";

export const metadata: Metadata = {
  title: "SES勤怠管理アプリ（仮）",
  description:
    "SESワーカーによる、SESワーカーが月総稼働時間を下回らないための管理アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-300 min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
