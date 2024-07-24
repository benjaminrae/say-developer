import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel.tsx";
import {cn} from "@/libs/tailwind/utils.ts";
import {TermCard} from "@/components/TermCard/TermCard.tsx";
import {useGetFeaturedTerms} from "@/domains/terms/hooks.ts";

type FeaturedItemsProps = {
  className?: string;
  delay?: number;
}
export const FeaturedTerms = ({className, delay}: FeaturedItemsProps) => {
  const plugin = useRef(
    Autoplay({delay: delay ?? 2000, stopOnInteraction: true})
  );

  const {data: terms} = useGetFeaturedTerms();

  return (
    <Carousel
      plugins={[plugin.current]}
      className={cn("w-full sm:max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-7xl", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {terms && <>
        <CarouselContent>
          {terms.map((term) => (
            <CarouselItem key={term.id}>
              <div className="p-1">
                <TermCard term={term}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </>}
    </Carousel>
  )
}
