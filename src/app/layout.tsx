import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ROX Motor Qazaqstan",
  description: "Роскошный внедорожник повышенной проходимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
