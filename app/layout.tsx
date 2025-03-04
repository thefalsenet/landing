import "@/app/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [
    {
      name: "bkhtdev",
      url: "https://bkhtdev.com",
    },
  ],
  creator: "bkhtdev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yusupovbg",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased lowercase",
            fontSans.variable
          )}
        >
          <Providers>
            <div vaul-drawer-wrapper="">
              <div className="flex-none h-screen pointer-events-none fixed left-[calc(50.00000000000002%-100%/2)] top-[calc(50.00000000000002%-100%/2)] w-full z-[200]">
                <div className="noise" />
              </div>

              <div className="relative flex min-h-screen flex-col items-center bg-background w-full gap-16">
                <SiteHeader />
                {children}
                {/* Footer */}
                <Footer />
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
