"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { createSectionId } from "@/lib/utils";

const LAST_UPDATED = "January 6, 2026";

export default function TermsOfService() {
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
                <CardTitle className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] tracking-[-0.01em] leading-[100%] mb-2 pb-3 text-balance wrap-break-word hyphens-auto font-serif">
                  Terms of Service
                </CardTitle>
                <CardDescription className="text-sm md:text-base md:leading-normal font-normal text-balance wrap-break-word">
                  Last updated: {LAST_UPDATED}
                </CardDescription>
              </div>
            </CardHeader>

            <div className="space-y-8 p-8">
              {sections.map((section) => {
                const sectionId = createSectionId(section.title!);
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
        Welcome to thefalse. These Terms of Service (&quot;Terms&quot;) govern
        your access to and use of TheFalse, including our website and related
        services. By using TheFalse, you agree to these Terms.
      </p>
    ),
  },
  {
    title: "1. What we're about",
    content: (
      <div className="space-y-4">
        <p>TheFalse is built for readers and thoughtful interaction.</p>
        <p>
          We believe in authenticity, privacy, and meaningful conversation. Our
          platform is designed to be a quieter space — one that values
          reflection over performance and people over algorithms.
        </p>
        <p>
          By using thefalse, you are part of an early-stage platform focused on
          reading, thinking, and sharing ideas intentionally.
        </p>
      </div>
    ),
  },
  {
    title: "2. Your account",
    content: (
      <div className="space-y-4">
        <p>When you create an account, you agree to:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>provide accurate information</li>
          <li>keep your login credentials secure</li>
          <li>be responsible for activity under your account</li>
          <li>notify us if you believe your account has been compromised</li>
        </ul>
        <p>
          You are responsible for anything that happens through your account.
        </p>
      </div>
    ),
  },
  {
    title: "3. Your content",
    content: (
      <div className="space-y-4">
        <p>
          TheFalse allows users to post content related to books and reading,
          including thoughts, highlights, and short reflections.
        </p>
        <p>You retain ownership of the content you create.</p>
        <p>
          By posting content on thefalse, you grant us a limited, non-exclusive
          license to host and display your content solely for the purpose of
          operating and improving the platform.
        </p>
        <p>
          This license ends when your content is deleted, except where retention
          is required for technical or legal reasons.
        </p>
      </div>
    ),
  },
  {
    title: "4. Content rules",
    content: (
      <div className="space-y-4">
        <p>You may not post content that:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>is illegal or harmful</li>
          <li>harasses, threatens, or abuses others</li>
          <li>contains spam or intentionally misleading information</li>
          <li>infringes on intellectual property or other rights</li>
        </ul>
        <p>
          We expect users to act in good faith and treat others respectfully.
        </p>
      </div>
    ),
  },
  {
    title: "5. Platform moderation",
    content: (
      <div className="space-y-4">
        <p>TheFalse does not actively monitor all content.</p>
        <p>
          However, we reserve the right to remove content or restrict accounts
          if necessary to protect the platform, comply with legal obligations,
          or respond to clear violations of these Terms.
        </p>
        <p>If you encounter a serious issue, you may contact us directly.</p>
      </div>
    ),
  },
  {
    title: "6. Our rights",
    content: (
      <div className="space-y-4">
        <p>We may:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>modify, suspend, or discontinue parts of the service</li>
          <li>update these Terms from time to time</li>
          <li>take reasonable action to protect TheFalse and its users</li>
        </ul>
        <p>Any changes will be effective once posted.</p>
      </div>
    ),
  },
  {
    title: "7. Important stuff",
    content: (
      <div className="space-y-4">
        <p>By using thefalse, you agree to:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>follow these Terms</li>
          <li>review and accept our Privacy Policy</li>
          <li>
            understand that content posted by users reflects their own views,
            not those of TheFalse
          </li>
        </ul>
        <p className="pt-4">
          If you have questions, contact us at:{" "}
          <a
            href="mailto:team@thefalse.net"
            className="text-foreground hover:underline"
          >
            team@thefalse.net
          </a>
        </p>
      </div>
    ),
  },
];
