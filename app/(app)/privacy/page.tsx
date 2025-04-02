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
    <>
      {/* Background Image */}
      <div className="fixed top-0 z-10 w-full h-[60vh] flex flex-col items-center justify-center ">
        <div className="flex flex-[1_0_0px] gap-10 flex-col w-full">
          <div className="flex flex-[1_0_0px] gap-6 flex-col justify-center w-full relative">
            <div className="absolute inset-0 top-0 left-0 bottom-0 right-0">
              <img
                src="/Library in Garden Profile.jpeg"
                alt="Garden Library Background"
                className="object-cover brightness-90 absolute inset-0 w-full h-full"
              />
            </div>
            <h1
              className="text-6xl sm:text-7xl z-10 md:text-8xl font-extrabold tracking-tighter text-center"
              style={{ lineHeight: "0.9em" }}
            >
              privacy policy.
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
                At TheFalse, we believe in privacy, transparency, and giving you
                control over your data. This Privacy Policy outlines what
                information we collect, how we use it, and your rights.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">what we collect</h2>
              <p>Information You Provide</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  When you sign up, you may provide a username, email
                  (optional), and other profile details.
                </li>
                <li>
                  Any content you create, post, or share is stored securely.
                </li>
              </ul>
              <p>Information We Collect Automatically</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Basic analytics: We may collect limited data like page views
                  and interactions to improve TheFalse. We do not track you
                  across the web.
                </li>
                <li>
                  Device & browser information: This helps us optimize the
                  experience for different devices.
                </li>
              </ul>
              <p>Information We Don’t Collect</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  No invasive tracking: We don’t use third-party ad trackers or
                  sell your data.
                </li>
                <li>
                  No unnecessary personal details: You’re in control of what you
                  share.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-foreground">how we use it</h2>
              <p>we use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate, improve, and personalize TheFalse.</li>
                <li>To ensure security and prevent abuse.</li>
                <li>
                  To communicate with you (only if necessary—no spam, ever).
                </li>
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
            {/* <section className="space-y-4">
              <h2 className="text-2xl text-foreground">
                your control & choices
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  you can delete your account: this removes all your data
                  permanently
                </li>
                <li>
                  you control your content: your notes, messages, and
                  interactions remain yours.
                </li>
                <li>
                  privacy-first defaults: We minimize data collection and
                  maximize user control.
                </li>
              </ul>
            </section> */}

            <div className="pt-8">
              <p>questions about privacy? email bkht@thefalse.net</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
