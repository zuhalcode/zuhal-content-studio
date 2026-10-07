import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

const siteUrl = "https://majumakmur.netlify.app";

export const metadata: Metadata = {
  title: "Content OS — Operating System for Content",
  description:
    "A focused workspace for turning research into content, measurement, learning, and the next experiment.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  metadataBase: new URL(siteUrl),
  applicationName: "Maju Makmur",
  verification: {
    google: "yZ0TP8CPLC5LmJYSsfgSw1kmh-U_AXq-kKd4oHHvZI4",
  },
  keywords: [
    "Maju Makmur",
    "jewelry store",
    "gold jewelry",
    "gold ring",
    "gold necklace",
    "gold bracelet",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Maju Makmur",
    title: "Maju Makmur | Jewelry Store",
    description:
      "Maju Makmur is a jewelry store offering gold jewelry and other jewelry products.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {process.env.NODE_ENV === "production" && <Analytics />}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
