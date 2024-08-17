import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courseCarouselContents } from "../config/courseCarouselContents";

interface Props {
  section: string;
}

export function CourseCarousel(props: Props) {
  const section = courseCarouselContents.filter(
    (s) => s.title === props.section
  )[0];
  return (
    <>
      <h1>{section.title}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {section.contents.map((course, key) => {
            return (
              <CarouselItem key={key} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="font-semibold">
                        {course.courseTitle}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
