"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Define the book covers for each column with actual image URLs
const bookCovers = [
  {
    id: "harry-potter",
    alt: "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
    imageUrl:
      "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "to-kill-mockingbird",
    alt: "To Kill a Mockingbird by Harper Lee",
    imageUrl:
      "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "the-alchemist",
    alt: "The Alchemist by Paulo Coelho",
    imageUrl: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
  },
  {
    id: "the-hobbit",
    alt: "The Hobbit by J.R.R. Tolkien",
    imageUrl:
      "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "ikigai",
    alt: "Ikigai: The Japanese Secret to a Long and Happy Life by Héctor García",
    imageUrl: "https://m.media-amazon.com/images/I/71lJBs5MNlL._SL1500_.jpg",
  },
  {
    id: "da-vinci-code",
    alt: "The Da Vinci Code by Dan Brown",
    imageUrl:
      "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "hunger-games",
    alt: "The Hunger Games by Suzanne Collins",
    imageUrl:
      "https://m.media-amazon.com/images/I/614SwlZNtJL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "gone-girl",
    alt: "Gone Girl by Gillian Flynn",
    imageUrl: "https://m.media-amazon.com/images/I/713e4Yk6brL._SL1500_.jpg",
  },
];

// Split books for desktop columns
const column1 = bookCovers.slice(0, 4);
const column2 = bookCovers.slice(4, 8);

export default function BookCollectionInfinite() {
  const [isLoaded, setIsLoaded] = useState(false);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for images to load before starting animations
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Animation configuration
    const columns = [
      { ref: col1Ref, speed: 0.5, direction: 1 }, // Column 1: Down (slower)
      { ref: col2Ref, speed: 0.7, direction: -1 }, // Column 2: Up (medium)
    ];

    const animationFrameIds: number[] = [];

    columns.forEach(({ ref, speed, direction }, index) => {
      if (!ref.current) return;

      const column = ref.current;
      let offset = 0;

      const animate = () => {
        // Increment offset based on speed
        offset += speed;

        // Reset when we've scrolled the height of one set of books
        const contentHeight = column.scrollHeight / 2;
        if (offset >= contentHeight) {
          offset = 0;
        }

        // Apply transform based on direction
        if (direction > 0) {
          column.style.transform = `translateY(-${offset}px)`;
        } else {
          column.style.transform = `translateY(${offset - contentHeight}px)`;
        }

        animationFrameIds[index] = requestAnimationFrame(animate);
      };

      animationFrameIds[index] = requestAnimationFrame(animate);
    });

    // Clean up animations on unmount
    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, [isLoaded]);

  // Create duplicate sets of books for seamless scrolling
  const renderBooks = (columnBooks: typeof column1, columnKey: string) => {
    return (
      <>
        {/* First set */}
        {columnBooks.map((book) => (
          <BookCover
            key={`${columnKey}-${book.id}`}
            imageUrl={book.imageUrl}
            alt={book.alt}
          />
        ))}
        {/* Second set (duplicate) */}
        {columnBooks.map((book) => (
          <BookCover
            key={`${columnKey}-dup-${book.id}`}
            imageUrl={book.imageUrl}
            alt={book.alt}
          />
        ))}
      </>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-full w-full overflow-hidden">
      {/* Column 1 - Scrolling Down */}
      <div className="relative overflow-hidden h-full">
        <div ref={col1Ref} className="flex flex-col gap-4">
          {renderBooks(column1, "col1")}
        </div>
      </div>

      {/* Column 2 - Scrolling Up */}
      <div className="relative overflow-hidden h-full">
        <div ref={col2Ref} className="flex flex-col gap-4">
          {renderBooks(column2, "col2")}
        </div>
      </div>
    </div>
  );
}

// Optimized BookCover component with loading state
function BookCover({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-[2/3] overflow-hidden shadow-lg bg-muted">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setIsLoaded(true)}
        priority
      />
    </div>
  );
}
