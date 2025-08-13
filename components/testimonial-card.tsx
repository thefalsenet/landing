import { StarRating } from "./star-rating";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Testimonial = {
     id: number,
     name: string,
     role: string,
     rating: string,
     email: string,
     testimonial: string,
     isPublic: boolean,
     createdAt: Date
}

export function TestimonialCard({ testimonial, ...props }: React.ComponentPropsWithoutRef<typeof Card> & {
     testimonial: Testimonial
}) {
     return (<>
          <Card className="border-none shadow-none bg-transparent gap-3 lg:gap-4 items-center lg:items-baseline py-4 lg:py-6">
               <CardHeader className="px-0 items-center lg:items-baseline w-full">
                    <StarRating rating={Number(testimonial.rating)} />
               </CardHeader>
               <CardContent className="px-0">
                    <p className="lg:text-left text-center">
                         {testimonial.testimonial}
                    </p>
               </CardContent>
               <CardFooter className="px-0 gap-2 lg:flex-row flex-col">
                    <CardTitle>
                         - {testimonial.name}
                    </CardTitle>
                    <CardDescription>
                         {testimonial.role}
                    </CardDescription>
               </CardFooter>
          </Card>
     </>)
}