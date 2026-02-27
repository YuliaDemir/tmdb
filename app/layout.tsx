import type { Metadata } from "next";

import "./globals.css";
import { Header, Main, WatchlistBubble } from "@components";

import { Providers } from "@/src/store/providers";

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
        <Providers>
          <Header />
          <Main>{children}</Main>
          <WatchlistBubble />
        </Providers>
      </body>
    </html>
  );
}
