"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => (
        <div key={index} className="border border-border w-full">
          <button
            className="flex justify-between items-center w-full p-4 text-left text-foreground hover:bg-muted transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-muted-foreground">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
