import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { landingCopy, getPreferredLocale } from "@/lib/i18n";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getPreferredLocale();
  const copy = landingCopy[locale];

  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <SiteHeader />
        {children}
        <Footer copy={copy.footer} />
      </main>
    </>
  );
}
