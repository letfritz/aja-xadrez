"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetTestimonials } from "@/hooks/use-testimonials";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useGetTestimonials();
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    content: string;
    playerName: string;
  } | null>(null);

  if (isLoading || !testimonials) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          O que Nossos Alunos Dizem
        </h2>
        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: !selectedTestimonial,
            }}
            className="w-full"
          >
            <CarouselContent>
              {selectedTestimonial ? (
                <CarouselItem className="basis-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex justify-end mb-6">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedTestimonial(null)}
                          className="text-[#C6AF78] hover:text-[#C6AF78] hover:bg-[#C6AF78]/10"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed whitespace-pre-wrap break-words">
                          "{selectedTestimonial.content}"
                        </p>
                        <p className="font-semibold text-base md:text-lg text-[#C6AF78]">
                          {selectedTestimonial.playerName}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ) : (
                testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full flex flex-col">
                      <CardContent className="p-4 md:p-6 flex flex-col flex-1">
                        <p className="text-base md:text-lg mb-4 flex-1 line-clamp-4">
                          "{testimonial.content}"
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <Button
                            variant="link"
                            className="text-[#C6AF78] p-0 h-auto"
                            onClick={() =>
                              setSelectedTestimonial({
                                content: testimonial.content,
                                playerName: testimonial.playerName,
                              })
                            }
                          >
                            Ver mais
                          </Button>
                          <p className="font-semibold text-sm md:text-base text-[#C6AF78]">
                            {testimonial.playerName}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            {!selectedTestimonial && (
              <>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
