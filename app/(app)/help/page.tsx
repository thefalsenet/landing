"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { createSectionId } from "@/lib/utils";
import React from "react";

export default function FaqPage() {
  const { copiedValue: copiedSection, copyToClipboard } = useCopyToClipboard();

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    copyToClipboard(url, sectionId);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-auto bg-background">
      <div className="relative z-10 flex grow flex-col">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <Card className="overflow-hidden rounded-xl border-none bg-muted/30">
            <CardHeader className="space-y-4 px-8 py-8">
              <div className="space-y-2 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl font-serif">
                  Help
                </CardTitle>
                <p className="text-muted-foreground">
                  Find answers to common questions about TheFalse.
                </p>
              </div>
            </CardHeader>

            <div className="space-y-8 p-8">
              {sections.map((section) => {
                const sectionId = createSectionId(section.title);
                return (
                  <div key={section.title} id={sectionId} className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-xl font-semibold tracking-tight font-serif">
                        {section.title}
                      </h2>
                      <button
                        onClick={() => handleCopyLink(sectionId)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`Copy link to ${section.title} section`}
                      >
                        <Link2
                          className={`h-4 w-4 ${
                            copiedSection === sectionId ? "text-green-500" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div className="prose prose-sm max-w-none text-muted-foreground font-medium">
                      {section.content}
                    </div>
                  </div>
                );
              })}

              {/* Still Have Questions */}
              <div className="mt-12 rounded-lg bg-muted/50 p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  Still Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  TheFalse is evolving. If something isn&apos;t clear or
                  you&apos;re unsure whether a feature exists yet — that&apos;s
                  okay. We&apos;d rather be honest than overpromise.
                </p>
                <a href="mailto:bkht@thefalse.net">
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    Contact Support
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Getting Started",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            What is TheFalse?
          </h3>
          <p>
            TheFalse is a social reading platform where people share thoughts,
            quotes, and reactions to books in a calm, text-focused environment.
            It&apos;s about ideas, not algorithms.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How do I create an account?
          </h3>
          <p>
            You can sign up using a username and optional email. No unnecessary
            information is required.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Is TheFalse free to use?
          </h3>
          <p>Yes. TheFalse is completely free during its current stage.</p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Do I need an email to use TheFalse?
          </h3>
          <p>
            An email is optional. Some features (like account recovery or
            important notifications) may require one.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Books & Reading",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Can I track my reading progress?
          </h3>
          <p>
            You can add books to your library and mark what you&apos;re reading
            or have finished. Advanced progress tracking is still evolving.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Can I import my books from other platforms?
          </h3>
          <p>
            Not yet. Importing from platforms like Goodreads is planned but not
            currently available.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How are books added to TheFalse?
          </h3>
          <p>
            Books are added from our internal database. The catalog is
            continuously improving.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Social & Community",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How does interaction work on TheFalse?
          </h3>
          <p>
            You can post text updates, thoughts, and quotes related to books and
            interact with others through replies and reactions.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Do you have reading groups or voice discussions?
          </h3>
          <p>
            No. TheFalse currently supports text-based interaction only. Voice
            and live discussions are not part of the platform right now.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Is there an algorithmic feed?
          </h3>
          <p>
            No. TheFalse does not push content using engagement-driven
            algorithms.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Privacy & Data",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How does TheFalse handle my data?
          </h3>
          <p>
            We collect only what&apos;s necessary to operate the platform. We
            don&apos;t sell your data or track you across the web.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Who can see my content?
          </h3>
          <p>
            Anything you post publicly is visible to others. Private content
            controls are limited for now.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Do you use ads or trackers?
          </h3>
          <p>No ads. No third-party ad trackers.</p>
        </div>
      </div>
    ),
  },
  {
    title: "Support & Safety",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-2">
            Are there community rules?
          </h3>
          <p>
            Yes. We expect respectful behavior and thoughtful discussion. Abuse,
            harassment, or spam may result in moderation.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How do I report a problem or content?
          </h3>
          <p>
            You can report issues through the Support / Report page or by
            emailing us directly.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-2">
            How can I contact support?
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:bkht@thefalse.net"
              className="text-foreground hover:underline"
            >
              bkht@thefalse.net
            </a>
          </p>
        </div>
      </div>
    ),
  },
];
