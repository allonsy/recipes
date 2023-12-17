import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipes",
  description: "The best collection of recipes --ever--",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
