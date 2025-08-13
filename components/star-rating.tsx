"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
     rating: number;
     maxRating?: number;
     className?: string;
     small?: boolean;
     style?: object
}

export function StarRating({
     rating,
     maxRating = 5,
     className,
     small = false,
     style
}: StarRatingProps) {
     const roundedRating = Math.round(rating * 100) / 100;
     const filledStars = Math.floor(rating);
     const hasPartialStar = rating % 1 !== 0;
     const partialStarPercentage = hasPartialStar ? (rating % 1) * 100 : 0;

     return (
          <div className={cn("flex items-center gap-2 text-sm flex-col md:flex-row", className)}>
               <div className="flex items-center gap-2">
                    <span
                         aria-label={`Rating ${roundedRating} out of ${maxRating}`}
                         role="img"
                         className="flex"
                    >
                         {[...Array(maxRating)].map((_, index) => (
                              <StarIcon
                                   key={index}
                                   filled={index < filledStars}
                                   partialFill={index === filledStars ? partialStarPercentage : 0}
                                   small={small}
                              />
                         ))}
                    </span>
               </div>
          </div>
     );
}

interface StarIconProps {
     filled: boolean;
     partialFill: number;
     small?: boolean;
}

function StarIcon({ filled, partialFill, small = false }: StarIconProps) {
     const id = React.useId();

     // Determine clipPath style based on direction
     const clipPathStyle =
          { clipPath: `inset(0 ${100 - partialFill}% 0 0)` }; // fill from left

     return (
          <svg
               viewBox="0 0 24 24"
               role="presentation"
               className={cn("transition-colors", small ? "h-4 w-4" : "h-5 w-5")}
          >
               {partialFill > 0 && (
                    <defs>
                         <clipPath id={`clip_${id}`}>
                              <path d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z" />
                         </clipPath>
                    </defs>
               )}
               <path
                    className={cn(
                         "transition-colors",
                         filled ? "fill-yellow" : "fill-yellow/15",
                         partialFill > 0 && "fill-yellow/15",
                    )}
                    d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
               />
               {partialFill > 0 && (
                    <path
                         className="fill-yellow"
                         d="M24 9.63469C24 9.35683 23.7747 9.13158 23.4969 9.13158H15.0892L12.477 1.34327C12.4269 1.19375 12.3095 1.0764 12.16 1.02625C11.8966 0.937894 11.6114 1.07983 11.523 1.34327L8.91088 9.13158H0.503157C0.33975 9.13158 0.186521 9.21094 0.0922364 9.3444C-0.0680877 9.57134 -0.0140806 9.88529 0.212865 10.0456L7.00408 14.8432L4.40172 22.6166C4.35092 22.7683 4.37534 22.9352 4.46749 23.066C4.6275 23.2932 4.94137 23.3476 5.16853 23.1876L12 18.3758L18.8317 23.183C18.9625 23.2751 19.1293 23.2994 19.281 23.2486C19.5445 23.1604 19.6865 22.8752 19.5983 22.6117L16.996 14.8432L23.7872 10.0456C23.9206 9.95133 24 9.7981 24 9.63469Z"
                         clipPath={`url(#clip_${id})`}
                         style={clipPathStyle}
                    />
               )}
          </svg>
     );
}
