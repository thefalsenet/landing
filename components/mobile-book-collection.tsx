"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Book data with cover images
const books = [
  {
    id: "harry-potter",
    alt: "Harry Potter and the Sorcerer's Stone",
    imageUrl:
      "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "to-kill-mockingbird",
    alt: "To Kill a Mockingbird",
    imageUrl:
      "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "the-alchemist",
    alt: "The Alchemist",
    imageUrl: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
  },
  {
    id: "dune",
    alt: "Dune",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "1984",
    alt: "1984",
    imageUrl:
      "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "brave-new-world",
    alt: "Brave New World",
    imageUrl:
      "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg",
  },
];

export default function MobileBookCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    let offset = 0;
    const speed = 0.2; // Very slow speed
    const direction = -1; // -1 for left, 1 for right
    let animationId: number;

    const animate = () => {
      offset += speed;

      // Calculate when to reset (after scrolling through one set of books)
      const bookWidth = 280 + 16; // book width + gap
      const contentWidth = bookWidth * books.length;

      if (offset >= contentWidth) {
        offset = 0;
      }

      // Apply transform
      container.style.transform = `translateX(${direction * offset}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className="flex gap-4">
        {/* Multiple copies for continuous scrolling */}
        {[...books, ...books, ...books, ...books].map((book, index) => (
          <div key={`${book.id}-${index}`} className="flex-none w-[280px]">
            <div className="relative aspect-[2/3] overflow-hidden bg-muted">
              <Image
                src={book.imageUrl || "/placeholder.svg"}
                alt={book.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
