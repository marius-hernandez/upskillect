import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

async function fetchProducts(){
    const res = await fetch('https://dummyapi.io/data/v1/post?limit=8', {
        headers: {
          'app-id': "6653052937fc48fe0534527c",
        },
      });
    return await res.json()

}

export async function Trending() {
    const products= await fetchProducts()

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 bg-primary">
          
            
                {products.data.length ===0?(
                    <div>Loading</div>
                ):(
                    products.data.map((product:any) =>(
                        <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-2xl font-semibold">{product.owner.firstName}</span>
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