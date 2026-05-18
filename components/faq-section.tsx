import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LandingDictionary } from "@/lib/i18n-shared";

interface FAQSectionProps {
  copy: LandingDictionary["faq"];
}

export default function FAQSection({ copy }: FAQSectionProps) {
  return (
    <section className="flex flex-col items-center gap-12 px-6 py-32 md:py-48">
      <div className="space-y-3 text-center flex flex-col items-center">
        <h2 className="text-2xl text-foreground md:text-3xl text-center font-serif font-medium leading-[1.3] tracking-[-0.02em] text-ink text-[clamp(32px,5vw,48px)]">
          {copy.title}
        </h2>
        <p className="text-sm text-muted-foreground md:text-base max-w-2xl text-center text-balance text-[clamp(32px,5vw,48px)]">
          {copy.intro}
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex w-full max-w-[960px] flex-col"
      >
        {copy.items.map((item) => (
          <AccordionItem
            value={item.question}
            className="overflow-hidden transition-[background-color,box-shadow] duration-300 ease-out bg-transparent data-[state=open]:bg-muted/40 data-[state=open]:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.02)] border-none"
            key={item.question}
          >
            <AccordionTrigger className="py-4 font-medium leading-[1.5] flex w-full cursor-pointer items-center justify-between gap-6 rounded-3xl px-6 pt-4 text-left transition-[padding-bottom] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 data-[state=open]:pb-2 pb-4 hover:no-underline text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base px-6 pb-4 leading-[1.5]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
