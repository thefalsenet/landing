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
              What is changing about TheFalse?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              TheFalse is being rebuilt around mobile. The product direction is
              narrower now: in-app reading, highlights, reflection, thoughtful
              discovery, and a calmer experience that takes reading seriously.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Why move to mobile first?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Because the next version of the product is meant to be where
              reading actually happens. The goal is not just to track books
              read elsewhere, but to let reading, notes, and reflection happen
              in one continuous flow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              What does the name mean?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              What we believe today may turn out to be false tomorrow. Books
              expose us to different perspectives, challenge assumptions, and
              expand how we see the world. TheFalse is a place where it&apos;s
              okay — even encouraged — to question what you think you know.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Is this still a social reading product?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Yes, but reading comes first. Community should help you discover
              good books and thoughtful people, not turn the product into a
              generic engagement feed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Can I join now?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Yes. Early-access signups are open while the mobile product is
              taking shape. Joining the waitlist is the best way to hear when
              new reader cohorts open.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              Who is TheFalse for?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              Readers who want more than a catalog and less than a noisy social
              app. If you care about highlighting, reflection, and building a
              reading history that feels intellectually useful, this is for you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
