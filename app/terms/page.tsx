import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "terms of service",
  openGraph: {
    title: "terms of service",
    images: ["/og-terms.jpg"],
  },
  twitter: {
    title: "terms of service",
    images: ["/og-terms.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pb-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-12 mb-16">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter"
            style={{ lineHeight: "0.9em" }}
          >
            terms of service.
          </h1>
          <div className="flex items-center gap-3 text-xl text-muted-foreground font-bold">
            <Image
              src="/profile.png"
              alt="thefalse.net"
              width={36}
              height={36}
            />
            <span>thefalse.net</span>
            <span>•</span>
            <span>mar 5, 2025</span>
          </div>
          <p className="text-muted-foreground">this is a 5-minute read.</p>
        </div>

        <div className="space-y-12 text-xl font-medium text-muted-foreground">
          <div>
            <p className="text-2xl text-foreground mb-8">hey.</p>
            <p className="mb-4">
              these are our terms of service — they&apos;re important because
              they outline our relationship with you and how you can use
              thefalse.net. we&apos;ve tried to keep them as straightforward as
              possible.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">
              1. what we&apos;re about
            </h2>
            <p>
              thefalse.net is a platform for book lovers. we provide tools and
              spaces for readers to track their progress, share thoughts, and
              connect with other readers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">2. your account</h2>
            <p>when you create an account with us, you need to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>be accurate with your information</li>
              <li>keep your password secure</li>
              <li>be responsible for your account activity</li>
              <li>let us know if something&apos;s wrong</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">3. content rules</h2>
            <p>you can share your thoughts about books, but you can&apos;t:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>post anything illegal or harmful</li>
              <li>harass other users</li>
              <li>spam or mislead people</li>
              <li>infringe on others&apos; rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">4. our rights</h2>
            <p>we can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>change or end services anytime</li>
              <li>remove content that breaks our rules</li>
              <li>suspend accounts if needed</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">5. important stuff</h2>
            <p>by using thefalse.net, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>follow these terms</li>
              <li>accept our privacy policy</li>
              <li>understand we&apos;re not responsible for user content</li>
              <li>contact us if you have questions</li>
            </ul>
          </section>

          <div className="pt-8">
            <p>if you need to reach us, email legal@thefalse.net</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
