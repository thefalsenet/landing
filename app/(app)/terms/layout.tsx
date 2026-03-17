import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  openGraph: {
    title: "Terms of Service",
  },
  twitter: {
    title: "Terms of Service",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
