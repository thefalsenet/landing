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
    <section className="w-full px-4 sm:px-8 py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1360px] space-y-10">
        <div className="space-y-3 text-left">
          <h2 className="text-2xl tracking-[-0.01em] leading-[100%] text-foreground font-serif md:text-3xl">
            {copy.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base max-w-2xl">
            {copy.intro}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[0].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[0].answer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[1].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[1].answer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[2].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[2].answer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[3].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[3].answer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[4].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[4].answer}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer">
              {copy.items[5].question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-5 pb-4 text-sm leading-relaxed">
              {copy.items[5].answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
