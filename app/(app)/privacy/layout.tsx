import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  openGraph: {
    title: "Privacy Policy",
  },
  twitter: {
    title: "Privacy Policy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
