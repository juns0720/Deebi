import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeeBi",
  description: "DeeBi turns GitHub commit activity into a tiny pixel dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="pixel-app-root">{children}</body>
    </html>
  );
}
