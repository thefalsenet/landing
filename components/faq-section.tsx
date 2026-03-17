import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="w-full px-4 sm:px-8 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1360px] space-y-10">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl tracking-[-0.01em] leading-[100%] text-foreground font-serif md:text-3xl">
            FAQ
          </h2>
          <p className="text-sm text-muted-foreground md:text-base max-w-2xl">
            From early readers and people evaluating TheFalse.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              What is TheFalse and who is it for?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              TheFalse is a reading platform built for readers who think and
              reflect. It tracks your books, lets you share thoughts and
              highlights, and surfaces readers worth following — without ads,
              algorithms, or streak pressure. If you find Goodreads too static
              and Twitter too fast, TheFalse is for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              How is it different from Goodreads?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Goodreads is a database with social features bolted on. thefalse
              is built around the feed and conversation first. No ads, no
              sponsored picks, no star ratings as the only way to express what a
              book meant to you. We surface thoughtful readers, not popular
              titles.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              What does the name mean?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              The name reflects a core idea: what we believe today may turn out
              to be false tomorrow. Books expose us to different perspectives,
              challenge assumptions, and expand how we see the world. TheFalse
              is a place where it&apos;s okay — even encouraged — to question
              what you think you know.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              How does discovery work if there&apos;s no algorithm?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Discovery on TheFalse happens through people, not systems. When
              someone you follow starts a book, writes a note, or shares a
              reflection, you see it in your feed — in chronological order.
              Books spread the same way good ideas spread: through curiosity and
              conversation, not through a ranked recommendation engine.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Is TheFalse free?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              TheFalse is free to join and use. You can sign up at thefalse.net
              — no waitlist, no invite required. The platform is live and open
              right now.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Who is TheFalse for?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              TheFalse is for people who read to think, not just to finish. If
              you find most social media too fast and Goodreads too passive,
              you&apos;ll feel at home here. Readers who like writing, who
              follow ideas, who want to discuss a book rather than just log it —
              this is built for you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
