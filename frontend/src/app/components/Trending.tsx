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
                        <CarouselItem key={product.id} className="pl-1 sm:basis-1/3  md:basis-1/4 lg:basis-1/5 bg-primary">
                            <div className="p-1 grid h-full">
                                <Card className="">
                                    <CardContent className="">
                                      <Image 
                                      src={product.images[0]} 
                                      alt={product.title}
                                      height={50}
                                      width={50}
                                      quality={50}
                                      priority={true}
                                      />
                                      
                                    <div className="grid">
                                      <p>{product.title}</p>
                                      <p>P{product.price}</p>
                                    </div>

                                    <div className="flex justify-around">
                                      <Button>Add to Cart</Button>
                                      <Button>See Flex</Button>
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