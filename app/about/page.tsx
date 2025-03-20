import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "our story",
  openGraph: {
    title: "our story",
    images: ["/og-about.jpg"],
  },
  twitter: {
    title: "our story",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-12 mb-16">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter"
            style={{ lineHeight: "0.9em" }}
          >
            our story.
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
          <p className="text-muted-foreground">this is a 4-minute read.</p>
        </div>

        <div className="space-y-12 text-xl text-muted-foreground font-medium">
          <div>
            <p className="text-2xl text-foreground mb-8">hey.</p>
            <p className="mb-4">
              we&apos;re building something different here. a place where
              readers can truly connect, share, and discover together.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">why we started</h2>
            <p>we love books. but we were tired of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>algorithms deciding what we should read</li>
              <li>
                social platforms that prioritize engagement over genuine
                connection
              </li>
              <li>reading apps that feel more like chores than joy</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">what we believe</h2>
            <p>we believe:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>reading is personal</li>
              <li>recommendations are better from friends than algorithms</li>
              <li>book communities should feel warm and welcoming</li>
              <li>tracking your reading should be simple and fun</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-foreground">what&apos;s next</h2>
            <p>we&apos;re launching soon with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>a beautiful reading tracker</li>
              <li>meaningful ways to connect with other readers</li>
              <li>tools to share your reading journey</li>
              <li>and more features shaped by our community</li>
            </ul>
          </section>

          <div className="pt-12">
            <Button size="lg" className="text-lg h-12" asChild>
              <a href="https://app.thefalse.net">join us on our journey</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
