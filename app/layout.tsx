import type { Metadata } from "next";

import "./globals.css";
import { WatchlistBubble } from "@components";

export const metadata: Metadata = {
  title: "Popcorn Picks",
  description:
    "Search movies and TV shows, save favorites, and build your next watchlist—one handful of popcorn at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
        <WatchlistBubble />
      </body>
    </html>
  );
}
