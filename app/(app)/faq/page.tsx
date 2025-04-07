import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import Footer from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

export default function FaqPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
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
              faq
            </h1>
            <div className="flex justify-center z-10">
              <p className="text-xl max-w-2xl text-center">
                Find answers to common questions about thefalse platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-16 z-10 relative pt-36 px-6 pb-16 bg-background/80 backdrop-blur-2xl mt-[60vh]">
        <div className="max-w-3xl mx-auto flex flex-col gap-16 w-full">
          {/* Main Content */}
          <section className="mb-12 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Getting Started
            </h2>
            <FaqAccordion
              items={[
                {
                  question: "How do I create an account?",
                  answer:
                    "Creating an account is simple. Click the 'Get Started' button on our homepage, enter your email address, create a password, and choose a username. You'll receive a confirmation email to verify your account, and then you're ready to start building your digital bookshelf.",
                },
                {
                  question: "Is thefalse free to use?",
                  answer:
                    "Yes, thefalse is completely free to use. We offer all core features without any subscription fees. We believe in creating a platform that's accessible to all book lovers, regardless of financial means.",
                },
                {
                  question: "Can I use thefalse on my mobile device?",
                  answer:
                    "thefalse is fully responsive and works on all devices. We also offer dedicated mobile apps for iOS and Android for an optimized mobile experience.",
                },
                {
                  question: "How do I find friends on thefalse?",
                  answer:
                    "You can find friends by searching for their username, connecting your email contacts (with your permission), or exploring community reading groups. We also suggest users with similar reading tastes who you might want to connect with.",
                },
              ]}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Features & Functionality
            </h2>
            <FaqAccordion
              items={[
                {
                  question: "How do I track my reading progress?",
                  answer:
                    "You can track your reading progress by adding books to your 'Currently Reading' shelf and updating your page count or percentage complete. You can also set reading goals, track reading time, and mark books as complete when you finish them.",
                },
                {
                  question: "Can I import my books from other platforms?",
                  answer:
                    "Yes, we support importing your library from Goodreads, StoryGraph, and other popular reading platforms. Go to Settings > Import Library and follow the instructions to bring your existing collection into thefalse.",
                },
                {
                  question: "How do book recommendations work?",
                  answer:
                    "Our recommendations are based on books you've read and enjoyed, as well as recommendations from people you follow. Unlike other platforms, we don't use algorithms to push sponsored content—all recommendations come from real readers in your network.",
                },
                {
                  question: "Can I create private reading groups?",
                  answer:
                    "Yes, you can create both public and private reading groups. Private groups are invitation-only and perfect for book clubs, classroom discussions, or friends who want to read together.",
                },
              ]}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Privacy & Data
            </h2>
            <FaqAccordion
              items={[
                {
                  question: "How does thefalse handle my data?",
                  answer:
                    "We take your privacy seriously. We only collect the data necessary to provide our service, and we never sell your information to third parties. Your reading habits and preferences remain private unless you explicitly choose to share them.",
                },
                {
                  question: "Can I control who sees my reading activity?",
                  answer:
                    "Absolutely. You have granular control over your privacy settings. You can make your profile completely public, visible only to friends, or completely private. You can also set privacy levels for individual books or shelves.",
                },
                {
                  question: "Does thefalse use tracking cookies?",
                  answer:
                    "We use only essential cookies necessary for the platform to function. We don't use tracking cookies for advertising or behavioral analysis. You can review our complete cookie policy in our Privacy Policy.",
                },
                {
                  question: "How can I delete my account?",
                  answer:
                    "You can delete your account at any time by going to Settings > Account > Delete Account. This will permanently remove all your data from our servers within 30 days, in compliance with data protection regulations.",
                },
              ]}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Community & Support
            </h2>
            <FaqAccordion
              items={[
                {
                  question: "Are there community guidelines?",
                  answer:
                    "Yes, we have community guidelines to ensure thefalse remains a positive and respectful environment. These include being respectful to other members, not posting hate speech or harassment, and properly attributing quotes and content. You can read our full guidelines in the Community section.",
                },
                {
                  question: "How can I report inappropriate content?",
                  answer:
                    "If you encounter content that violates our community guidelines, you can report it by clicking the three dots next to the content and selecting 'Report'. Our moderation team reviews all reports within 24 hours.",
                },
                {
                  question: "Does thefalse have reading challenges?",
                  answer:
                    "Yes! We host seasonal reading challenges and allow users to create custom challenges. These can be personal goals or community events where friends can participate together.",
                },
                {
                  question: "How do I contact support?",
                  answer:
                    "You can reach our support team by emailing support@thefalse.net or using the Help Center accessible from your account menu. We typically respond within 24 hours on business days.",
                },
              ]}
            />
          </section>

          {/* Still Have Questions Section */}
          <section className="mix-blend-difference max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white mb-6">
              We&apos;re here to help. Reach out to our support team and
              we&apos;ll get back to you as soon as possible.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-none">
              <a href="mailto:bkht@thefalse.net">Contact Support</a>
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}
