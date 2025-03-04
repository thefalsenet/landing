import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-24 px-6 max-w-[1440px] w-full border">
      <div className="flex flex-col flex-none items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            faq
          </h2>
          <p className="text-xl text-muted-foreground">
            everything you need to know about thefalse.net
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-4xl w-full flex-1 lowercase"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="lowercase">
              Is thefalse.net free to use?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, thefalse.net offers a free tier with core features. We also
              offer a premium subscription with advanced features for serious
              readers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="lowercase">
              How do I track my reading progress?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can easily update your reading progress by entering the page
              number or percentage you&apos;ve completed. The platform will
              automatically calculate your reading pace and estimate completion
              dates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do book clubs work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can create or join virtual book clubs, set reading schedules,
              and participate in discussions. Book clubs can be public or
              private, and you can invite friends to join.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="lowercase">
              How are book recommendations generated?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Our AI-powered recommendation engine analyzes your reading
              history, preferences, and community trends to suggest books
              you&apos;re likely to enjoy. The more you use the platform, the
              better the recommendations become.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="lowercase">
              When will thefalse.net launch?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We&apos;re launching on March 20th! Sign up for early access to be
              among the first to experience the platform and help shape its
              future.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
