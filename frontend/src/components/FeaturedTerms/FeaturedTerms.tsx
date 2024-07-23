import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import {Term} from "@/domains/terms/types.ts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel.tsx";
import {cn} from "@/libs/tailwind/utils.ts";
import {TermCard} from "@/components/TermCard/TermCard.tsx";

type FeaturedItemsProps = {
  className?: string;
  delay?: number;
}
export const FeaturedTerms = ({className, delay}: FeaturedItemsProps) => {
  const plugin = useRef(
    Autoplay({delay: delay ?? 2000, stopOnInteraction: true})
  );

  const terms: Term[] = [
    {
      id: "f3a29b1b-7b33-4b29-9f58-1e0d041efdbc",
      raw: "Python",
      description: "A high-level, interpreted programming language known for its readability and wide usage in web development, data science, and automation.",
      phonetic: "PY-thon",
      aliases: ["Py"],
      words: [],
      createdBy: ""
    },
    {
      id: "d9d19d7d-66a6-4e39-8f7d-441aaf9ae08f",
      raw: "JavaScript",
      description: "A versatile, high-level programming language that is primarily used for creating interactive effects within web browsers.",
      phonetic: "JAH-vuh-SKRIPT",
      aliases: ["JS"],
      words: [],
      createdBy: ""
    },
    {
      id: "5f5b9ec3-daa1-4e59-b9c4-4512f49b6c91",
      raw: "Java",
      description: "A widely-used object-oriented programming language that is platform-independent and used for building applications across various devices.",
      phonetic: "JAH-vuh",
      aliases: [],
      words: [],
      createdBy: ""
    },
    {
      id: "1a9c570d-bf72-497b-8ff7-ecf1a37bbfbd",
      raw: "C++",
      description: "An extension of the C programming language, known for its performance and use in system/software development, game development, and real-time simulations.",
      phonetic: "SEE-plus-plus",
      aliases: [],
      words: [],
      createdBy: "",
    }
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className={cn("w-full sm:max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-7xl", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
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
    </Carousel>
  )
};
