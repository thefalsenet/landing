"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Define the book covers for each column with actual image URLs
const bookCovers = {
  column1: [
    {
      id: "harry-potter",
      alt: "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
      imageUrl: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "to-kill-mockingbird",
      alt: "To Kill a Mockingbird by Harper Lee",
      imageUrl: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "the-alchemist",
      alt: "The Alchemist by Paulo Coelho",
      imageUrl: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    },
    {
      id: "the-hobbit",
      alt: "The Hobbit by J.R.R. Tolkien",
      imageUrl: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    },
  ],
  column2: [
    {
      id: "da-vinci-code",
      alt: "The Da Vinci Code by Dan Brown",
      imageUrl: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "hunger-games",
      alt: "The Hunger Games by Suzanne Collins",
      imageUrl: "https://m.media-amazon.com/images/I/614SwlZNtJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "gone-girl",
      alt: "Gone Girl by Gillian Flynn",
      imageUrl: "https://m.media-amazon.com/images/I/713e4Yk6brL._SL1500_.jpg",
    },
    {
      id: "fault-in-stars",
      alt: "The Fault in Our Stars by John Green",
      imageUrl: "https://m.media-amazon.com/images/I/817tHNcyAgL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
  column3: [
    {
      id: "ikigai",
      alt: "Ikigai: The Japanese Secret to a Long and Happy Life by Héctor García",
      imageUrl: "https://m.media-amazon.com/images/I/71lJBs5MNlL._SL1500_.jpg",
    },
    {
      id: "girl-on-train",
      alt: "The Girl on the Train by Paula Hawkins",
      imageUrl: "https://m.media-amazon.com/images/I/91Ub4VK5Z6L._SL1500_.jpg",
    },
    {
      id: "where-crawdads",
      alt: "Where the Crawdads Sing by Delia Owens",
      imageUrl: "https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "silent-patient",
      alt: "The Silent Patient by Alex Michaelides",
      imageUrl: "https://m.media-amazon.com/images/I/91BbLCJOruL._SL1500_.jpg",
    },
  ],
}

export default function BookCollectionInfinite() {
  const [isLoaded, setIsLoaded] = useState(false)
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)
  const col3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for images to load before starting animations
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    // Animation configuration
    const columns = [
      { ref: col1Ref, speed: 0.5, direction: 1 }, // Column 1: Down (slower)
      { ref: col2Ref, speed: 0.7, direction: -1 }, // Column 2: Up (medium)
      { ref: col3Ref, speed: 0.4, direction: 1 }, // Column 3: Down (slowest)
    ]

    const animationFrameIds: number[] = []

    columns.forEach(({ ref, speed, direction }, index) => {
      if (!ref.current) return

      const column = ref.current
      let offset = 0

      const animate = () => {
        // Increment offset based on speed
        offset += speed

        // Reset when we've scrolled the height of one set of books
        const contentHeight = column.scrollHeight / 2
        if (offset >= contentHeight) {
          offset = 0
        }

        // Apply transform based on direction
        if (direction > 0) {
          column.style.transform = `translateY(-${offset}px)`
        } else {
          column.style.transform = `translateY(${offset - contentHeight}px)`
        }

        animationFrameIds[index] = requestAnimationFrame(animate)
      }

      animationFrameIds[index] = requestAnimationFrame(animate)
    })

    // Clean up animations on unmount
    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id))
    }
  }, [isLoaded])

  // Create duplicate sets of books for seamless scrolling
  const renderBooks = (columnBooks: typeof bookCovers.column1, columnKey: string) => {
    return (
      <>
        {/* First set */}
        {columnBooks.map((book) => (
          <BookCover key={`${columnKey}-${book.id}`} imageUrl={book.imageUrl} alt={book.alt} />
        ))}
        {/* Second set (duplicate) */}
        {columnBooks.map((book) => (
          <BookCover key={`${columnKey}-dup-${book.id}`} imageUrl={book.imageUrl} alt={book.alt} />
        ))}
      </>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-4 h-full w-full overflow-hidden">
      {/* Column 1 - Scrolling Down */}
      <div className="relative overflow-hidden h-full">
        <div ref={col1Ref} className="flex flex-col gap-4">
          {renderBooks(bookCovers.column1, "col1")}
        </div>
      </div>

      {/* Column 2 - Scrolling Up */}
      <div className="relative overflow-hidden h-full">
        <div ref={col2Ref} className="flex flex-col gap-4">
          {renderBooks(bookCovers.column2, "col2")}
        </div>
      </div>

      {/* Column 3 - Scrolling Down */}
      <div className="relative overflow-hidden h-full">
        <div ref={col3Ref} className="flex flex-col gap-4">
          {renderBooks(bookCovers.column3, "col3")}
        </div>
      </div>
    </div>
  )
}

// Optimized BookCover component with loading state
function BookCover({ imageUrl, alt }: { imageUrl: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative aspect-[2/3] rounded-md overflow-hidden shadow-lg bg-gray-100">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setIsLoaded(true)}
        priority
      />
    </div>
  )
}

