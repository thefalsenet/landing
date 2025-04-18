import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <SiteHeader />
        {children}
        <Footer />
      </main>
    </>
  );
}
