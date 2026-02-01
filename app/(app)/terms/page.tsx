"use client";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { createSectionId } from "@/lib/utils";
import React from "react";

const LAST_UPDATED = "February 1, 2025";

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
                <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl font-serif">
                  Terms of Use
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
    title: "Welcome",
    content: (
      <div className="space-y-4">
        <p>
          Welcome to TheFalse. By accessing or using our website, application,
          or services (collectively, the &quot;Service&quot;), you agree to be
          bound by these Terms of Use. If you do not agree, please do not use
          the Service.
        </p>
      </div>
    ),
  },
  {
    title: "1. Description of the Service",
    content: (
      <div className="space-y-4">
        <p>
          TheFalse is a social reading platform that lets you build a personal
          digital library, track what you read, write reflections and notes, and
          optionally connect with other readers.
        </p>
        <p>
          Features include book tracking, notes and highlights, a chronological
          feed, following other readers, rooms and circles for small-group
          conversation, and related tools. We may add, change, or discontinue
          features from time to time.
        </p>
      </div>
    ),
  },
  {
    title: "2. Eligibility and Accounts",
    content: (
      <div className="space-y-4">
        <p>
          You must be at least 13 years old (or the minimum age in your
          jurisdiction to consent to use online services) to use the Service. If
          you are under 18, you should have a parent or guardian review these
          terms with you.
        </p>
        <p>
          You are responsible for keeping your account credentials secure and
          for all activity under your account. You must provide accurate
          information and update it when it changes.
        </p>
      </div>
    ),
  },
  {
    title: "3. Your Content and Conduct",
    content: (
      <div className="space-y-4">
        <p>
          You retain ownership of content you create (notes, reflections,
          comments, profile information, and similar content).
        </p>
        <p>
          By posting content on the Service, you grant us a non-exclusive,
          royalty-free, worldwide license to use, store, display, and distribute
          that content as needed to operate and improve the Service (including
          backup and syndication to other users as you choose).
        </p>
        <p>You agree not to use the Service to:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>violate any law or encourage illegal activity</li>
          <li>infringe others' intellectual property or privacy</li>
          <li>harass, abuse, defame, or threaten others</li>
          <li>impersonate any person or entity</li>
          <li>distribute malware or attempt to compromise our systems</li>
          <li>
            scrape, automate access, or circumvent access controls without
            permission
          </li>
        </ul>
        <p>
          We may remove content or suspend or terminate accounts that violate
          these terms or that we reasonably believe harm the Service or others.
          We are not obligated to monitor all content but may do so when we
          choose.
        </p>
      </div>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <div className="space-y-4">
        <p>
          TheFalse and its branding, design, code, and other materials we
          provide are owned by us or our licensors. You may not copy, modify, or
          create derivative works of our Service or use our trademarks without
          written permission.
        </p>
        <p>
          Book metadata (titles, covers, descriptions) may be subject to
          third-party rights; we use such information in accordance with our
          data sources and applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "5. Privacy",
    content: (
      <div className="space-y-4">
        <p>
          Your use of the Service is also governed by our{" "}
          <a
            href="https://thefalse.net/privacy"
            className="text-foreground hover:underline"
          >
            Privacy Policy
          </a>
          , which describes how we collect, use, and protect your information.
          By using the Service, you consent to that policy.
        </p>
      </div>
    ),
  },
  {
    title: "6. What We Store and What We Don't",
    content: (
      <div className="space-y-4">
        <p>
          <strong>What we store.</strong> To provide the Service, we store:
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong>Account information</strong> - email, username, name, profile
            picture, bio, locale, and similar details you provide or that we
            receive from sign-in providers.
          </li>
          <li>
            <strong>Your content</strong> - notes, reflections, book reviews,
            comments, and other content you create or post on the Service.
          </li>
          <li>
            <strong>Reading data</strong> - books you add to your library,
            reading status (e.g. want to read, currently reading, read),
            optional dates, and reading-session data when you use those
            features.
          </li>
          <li>
            <strong>Social and activity data</strong> - who you follow, likes,
            bookmarks, membership in circles and rooms, and similar data needed
            to run the feed and social features.
          </li>
          <li>
            <strong>Technical and safety data</strong> - session and account
            metadata, logs needed to operate and secure the Service, and data we
            are required to keep for legal or safety reasons.
          </li>
        </ul>
        <p>
          <strong>What we don't store / don't do.</strong> We are designed to be
          privacy-respecting:
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li>
            <strong>Search history on our servers</strong> - Your recent
            searches (e.g. last 15) are stored only on your device (e.g. in your
            browser). We do not retain search history on our servers for the
            long term or use it to build profiles about you.
          </li>
          <li>
            <strong>No selling your data</strong> - We do not sell your personal
            data or reading history to third parties.
          </li>
          <li>
            <strong>No ads</strong> - We do not run ads or use your data for ad
            targeting.
          </li>
          <li>
            <strong>No hidden tracking</strong> - We do not use your searches or
            reading activity to build marketing profiles, and we do not share
            search or reading history with third parties for those purposes.
          </li>
        </ul>
        <p>
          For full details on collection, use, retention, and your rights, see
          our{" "}
          <a
            href="https://thefalse.net/privacy"
            className="text-foreground hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "7. Disclaimers",
    content: (
      <div className="space-y-4">
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available.&quot;
          We do not guarantee that it will be uninterrupted, error-free, or free
          of harmful components.
        </p>
        <p>
          We are not responsible for the accuracy of book metadata, third-party
          content, or content posted by users. Reading recommendations and other
          features may be imperfect; use your own judgment. Nothing in the
          Service constitutes professional (e.g., legal or medical) advice.
        </p>
      </div>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p>
          To the fullest extent permitted by law, TheFalse and its affiliates,
          officers, and employees shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss
          of profits, data, or goodwill, arising from your use of the Service.
        </p>
        <p>
          Our total liability for any claims related to the Service shall not
          exceed the amount you paid us in the twelve (12) months before the
          claim (or one hundred U.S. dollars if you have not paid us). Some
          jurisdictions do not allow certain limitations; in those cases, our
          liability is limited to the maximum permitted.
        </p>
      </div>
    ),
  },
  {
    title: "9. Termination",
    content: (
      <div className="space-y-4">
        <p>You may stop using the Service at any time.</p>
        <p>
          We may suspend or terminate your access if you breach these terms or
          for other operational or legal reasons. Upon termination, your right
          to use the Service ends.
        </p>
        <p>
          We may retain and use your content as needed for legal compliance,
          dispute resolution, and safety, subject to our Privacy Policy. You may
          request deletion of your account and data as described in our Privacy
          Policy.
        </p>
      </div>
    ),
  },
  {
    title: "10. Changes to These Terms",
    content: (
      <div className="space-y-4">
        <p>
          We may update these Terms of Use from time to time. We will post the
          updated terms on this page and update the &quot;Last updated&quot;
          date.
        </p>
        <p>
          For material changes, we may notify you by email or through the
          Service. Continued use of the Service after changes take effect means
          you accept the new terms. If you do not agree, please stop using the
          Service.
        </p>
      </div>
    ),
  },
  {
    title: "11. General",
    content: (
      <div className="space-y-4">
        <p>
          These terms, together with our Privacy Policy and any other policies
          we publish, constitute the entire agreement between you and TheFalse
          regarding the Service.
        </p>
        <p>
          If any part of these terms is held invalid, the rest remains in
          effect. Our failure to enforce a right does not waive that right.
        </p>
        <p>
          These terms are governed by the laws of the jurisdiction in which we
          operate, without regard to conflict of law principles. Any disputes
          shall be resolved in the courts of that jurisdiction, except where
          prohibited.
        </p>
      </div>
    ),
  },
  {
    title: "12. Contact",
    content: (
      <div className="space-y-4">
        <p>
          Questions about these Terms of Use or the Service can be sent to us
          via the contact or support options provided on{" "}
          <a
            href="https://thefalse.net"
            className="text-foreground hover:underline"
          >
            thefalse.net
          </a>{" "}
          or through the application.
        </p>
      </div>
    ),
  },
];
