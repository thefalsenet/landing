import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "privacy policy",
  openGraph: {
    title: "privacy policy",
    images: ["/og-privacy.jpg"],
  },
  twitter: {
    title: "privacy policy",
    images: ["/og-privacy.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-12 mb-16">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter"
            style={{ lineHeight: "0.9em" }}
          >
            privacy policy.
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
          <p className="text-muted-foreground">this is a 3-minute read.</p>
        </div>

        <div className="space-y-12 text-xl font-medium text-muted-foreground">
          <div>
            <p className="text-2xl text-foreground mb-8">hey.</p>
            <p className="mb-4">
              we care about your privacy. here&apos;s how we handle your
              information — written in plain language because privacy policies
              shouldn&apos;t be confusing.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">what we collect</h2>
            <p>we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                information you give us (like your email and reading
                preferences)
              </li>
              <li>how you use thefalse.net</li>
              <li>technical stuff (like your IP address and device info)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">how we use it</h2>
            <p>we use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>run and improve thefalse.net</li>
              <li>personalize your experience</li>
              <li>keep you updated</li>
              <li>keep things secure</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">sharing</h2>
            <p>we don&apos;t sell your data. we only share it:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>when you choose to make it public</li>
              <li>with service providers who help us run thefalse.net</li>
              <li>if we&apos;re legally required to</li>
            </ul>
          </section>

          <div className="pt-8">
            <p>questions about privacy? email privacy@thefalse.net</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
