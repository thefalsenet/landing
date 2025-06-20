import "@/app/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { fontSans, fontSerif } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

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
      <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
        <head>
          <script>
            {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq("config", "ph0w1");`}
          </script>
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            title="thefalse Search"
            href="https://app.thefalse.net/opensearch.xml"
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased dark",
            fontSans.variable,
            fontSerif.variable
          )}
        >
          <Providers attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </Providers>
          <Analytics />
        </body>
      </html>
    </>
  );
}
