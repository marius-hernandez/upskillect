"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courseCarouselContents } from "../config/courseCarouselContents";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Props {
  section: string;
}

export function CourseCarousel(props: Props) {
  const [courses, setCourses]=useState({})
  const getCourses = async () => {
    try {
      const data = await fetch(`${process.env.UPSKILLECT_NEST_URL}\courses`)
      setCourses(data)
      console.log(data)
      return data
    } catch (error) {
      return error;
    }
  };

  const section = courseCarouselContents.filter(
    (s) => s.title === props.section
  )[0];

  useEffect(() => {
    getCourses()
  },[]);

  return (
    <>
      <h1 className="text-2xl font-semibold py-5">{section.title}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="h-full">
          {section.contents.map((course, key) => {
            return (
              <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 hover:scale-90 rounded-lg z-50">
                  <Card className="rounded-lg">
                    <CardContent className=" p-0 items-end justify-end">
                      <div className=" rounded-t-lg w-full h-[150px] relative overflow-hidden">
                        <Image
                          src={`https://picsum.photos/seed/${Math.floor(
                            Math.random() * 1000
                          )}/200/300`}
                          alt="pic"
                          style={{ objectFit: "cover" }}
                          fill
                        />
                      </div>
                      <div className="px-6 py-3 h-[200px] grid grid-rows-4 ">
                        <div className="flex justify-between">
                          <div className="flex">
                            <MapPin size={15} />
                            <p className="font-light text-xs grid-flow-dense">
                              {course.location}
                            </p>
                          </div>
                          <Link
                            href={"#"}
                            className="font-light text-sm float-right"
                          >
                            {`${course.institute.substring(0, 20)}...`}
                          </Link>
                        </div>
                        <div className="row-span-2">
                          <span className="font-semibold ">
                            {`${course.courseTitle.substring(0, 25)}...`}
                          </span>
                          <p className="text-xs font-light text-justify indent-6 leading-relaxed">
                            {course.description.substring(0, 80) + "..."}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <Link
                            href={`/${course.institute}/${course.courseTitle}`}
                            className={`${buttonVariants({
                              variant: "secondary",
                            })} btn btn-sm font-normal`}
                          >
                            See more
                          </Link>
                          <h1>
                            <span className="text-sm font-light">
                              Starts at{" "}
                            </span>
                            <span className="font-bold text-green-600">
                              ₱{course.startsAt}
                            </span>
                          </h1>
                        </div>
                      </div>
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
