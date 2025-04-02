import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <div className="flex-none h-screen pointer-events-none fixed left-[calc(50.00000000000002%-100%/2)] top-[calc(50.00000000000002%-100%/2)] w-full z-[200]">
          <div className="noise" />
        </div>
        <SiteHeader />
        {children}
        <Footer />
      </main>
    </>
  );
}
