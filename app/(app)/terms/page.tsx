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
    <>
      {/* Background Image */}
      <div className="fixed top-0 z-10 w-full h-[60vh] flex flex-col items-center justify-center ">
        <div className="flex flex-[1_0_0px] gap-10 flex-col w-full">
          <div className="flex flex-[1_0_0px] gap-6 flex-col justify-center w-full relative text-white">
            <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
              <img
                src="/Library in Garden Profile.jpeg"
                alt="Garden Library Background"
                className="object-cover brightness-90 absolute inset-0 w-full h-full"
              />
            </div>
            <h1
              className="text-6xl sm:text-7xl z-10 md:text-8xl font-bold tracking-tighter text-center"
              style={{ lineHeight: "0.9em" }}
            >
              terms of service.
            </h1>
            <div className="flex gap-2.5 items-center justify-center z-10">
              <Image
                src="/profile.png"
                alt="thefalse.net"
                width={36}
                height={36}
              />
              <span>thefalse</span>
              <span>•</span>
              <span>apr 2, 2025</span>
              <span>•</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-16 z-10 relative pt-36 px-6 pb-16 bg-background/80 backdrop-blur-2xl mt-[60vh]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 text-xl font-medium text-muted-foreground">
            <div>
              <p className="text-2xl text-foreground mb-8">hey.</p>
              <p className="mb-4">
                Welcome to TheFalse! These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of our platform, services, and
                content. By using TheFalse, you agree to these Terms.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">
                what we&apos;re about
              </h2>
              <p>
                TheFalse is built to challenge the norms of social interaction
                online. We believe in authenticity, privacy, and meaningful
                conversations. Our platform is designed to be a space where
                users can engage freely while maintaining control over their own
                experience. By using TheFalse, you are part of a movement that
                prioritizes real connections over algorithms and engagement
                traps.
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
              <p>
                you can share your thoughts about books, but you can&apos;t:
              </p>
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
              <p>if you need to reach us, email bkht@thefalse.net</p>
            </div>
            <div className="pt-8 font-bold text-foreground">
              <p>Be real. Be responsible. That’s TheFalse.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
