"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { createSectionId } from "@/lib/utils";

const LAST_UPDATED = "April 2, 2025";

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    Last updated: {LAST_UPDATED}
                  </p>
                </div>
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Overview",
    content: (
      <p>
        At thefalse, we believe in privacy, transparency, and giving you control
        over your data. This Privacy Policy explains what information we
        collect, how we use it, and the choices you have.
      </p>
    ),
  },
  {
    title: "What we collect",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-3">
            Information you provide
          </h3>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              When you sign up, you may provide a username, email address (if
              you choose to), and basic profile details.
            </li>
            <li>
              Any content you create or post on thefalse is stored so the
              platform can function.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-3">
            Information we collect automatically
          </h3>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Basic usage data: We may collect limited information such as page
              views and interactions to understand how TheFalse is used and how
              to improve it.
            </li>
            <li>
              Device and browser information: This helps us ensure compatibility
              and performance across devices.
            </li>
          </ul>
          <p className="mt-3">We do not track you across other websites.</p>
        </div>

        <div>
          <h3 className="text-foreground font-semibold mb-3">
            Information we don&apos;t collect
          </h3>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              No invasive tracking: We do not use third-party advertising
              trackers.
            </li>
            <li>No data selling: We do not sell your personal data.</li>
            <li>
              No unnecessary personal details: You decide what to share on your
              profile and in your content.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <div className="space-y-4">
        <p>We use your information only to:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>operate and maintain thefalse</li>
          <li>improve performance and usability</li>
          <li>keep the platform secure and prevent abuse</li>
          <li>communicate with you when necessary (no spam)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Sharing your information",
    content: (
      <div className="space-y-4">
        <p>We do not sell your data.</p>
        <p>Your information may be shared only:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>when you choose to make content public</li>
          <li>
            with trusted service providers that help us operate the platform
          </li>
          <li>when required by law</li>
        </ul>
        <p>We share the minimum necessary information in each case.</p>
      </div>
    ),
  },
  {
    title: "Your control",
    content: (
      <p>
        You control your content and profile information. You may update or
        delete your content at any time, subject to technical or legal
        limitations.
      </p>
    ),
  },
  {
    title: "Questions",
    content: (
      <p>
        If you have questions or concerns about privacy, contact us at:{" "}
        <a
          href="mailto:bkht@thefalse.net"
          className="text-foreground hover:underline"
        >
          bkht@thefalse.net
        </a>
      </p>
    ),
  },
];
