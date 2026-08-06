import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/locales/I18nProvider";
import HtmlLanguage from "@/locales/HtmlLanguage";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolombet Portfolio",
  description: "Mykola Kolombet's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <I18nProvider>
        <HtmlLanguage />
        <body className="min-h-full flex flex-col">{children}</body>
      </I18nProvider>
    </html>
  );
}
