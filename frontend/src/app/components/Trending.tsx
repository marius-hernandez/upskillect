import * as React from "react"
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

async function fetchProducts(){
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    return await res.json()
}
export async function Trending() {
    const products= await fetchProducts()
  return (
    <Carousel className="w-full grid gap-7">
      <CarouselContent className="-ml-1">
                {products.length ===0?(
                    <div>Loading</div>
                ):(
                    products.map((product:any) =>(
                        <CarouselItem key={product.id} className="pl-1 sm:basis-1/3  md:basis-1/4 lg:basis-1/5 shadow-md hover:scale-105 duration-300">
                            <div className="p-1 grid h-full">
                                <Card className="w- bg-red-600">
                                    <CardContent className="w-full">
                                      <Image className="h-40 w-40 object-cover"
                                      src={product.images[0]} 
                                      alt={product.title}
                                      height={50}
                                      width={50}
                                      quality={50}
                                      priority={true}

                                      />
                                      
                                    <div className="w-28">
                                      <span className="text-gray-400 uppercase text-sm">Brand</span>
                                      <p className="text-lg font-bold block truncate ... capitalize">{product.title}</p>
                                      <div className="flex items-center">
                                        <p className="text-lg font-semibold my-3">{product.price}</p>
                                        <del>
                                          <p className="text-sm text-gray-600 ml-2">{product.price}</p>
                                        </del>

                                      </div>
                                    </div>
                                    </CardContent>
                                </Card>
                            
                            </div>
                        </CarouselItem>
                    ))
                )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
    
  )
}

export default Trending