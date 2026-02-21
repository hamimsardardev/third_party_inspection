"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      className="container mx-auto "
    >
      <CarouselContent className="flex overflow-visible">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimage.jpg"
                  alt="blogimage.jpg"
                  height={226}
                  width={312}
                  className="w-full rounded-tl-xl rounded-tr-xl"
                />

                <div className="p-6 bg-gray-700 rounded-b-xl">
                  <p className="text-sm text-white mb-2">Quality Control</p>
                  <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                    Complete Guide to Pre-Shipment Inspection
                  </h3>
                  <p className="text-white text-sm mb-4">
                    Learn why PSI is essential before export and how it protects
                    your business from costly defects.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-white hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimage_v2.jpg"
                  alt="blogimage.jpg"
                  height={226}
                  width={312}
                  className="w-full rounded-tl-xl rounded-tr-xl"
                />
                <div className="p-6 bg-gray-700 rounded-b-xl">
                  <p className="text-sm text-white mb-2">Food & Fruits</p>
                  <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                    Food Safety Inspection Standards for Export
                  </h3>
                  <p className="text-white text-sm mb-4">
                    Discover the key quality and safety checks required for
                    exporting fresh produce globally.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-white hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimagethree.jpg"
                  alt="blogimage3"
                  height={226}
                  width={312}
                  className="w-full rounded-tl-xl rounded-tr-xl "
                />
                <div className="p-6 bg-gray-700 rounded-b-xl">
                  <p className="text-sm text-white mb-2">Footwear Inspection</p>
                  <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                    Footwear Quality Control Checklist
                  </h3>
                  <p className="text-white text-sm mb-4">
                    Essential inspection points to ensure durability, safety,
                    and compliance in footwear production.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-white hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimagefour.jpg"
                  alt="blogimage4"
                  height={226}
                  width={312}
                  className="w-full rounded-tl-xl rounded-tr-xl"
                />
                <div className="p-6 bg-gray-700 rounded-b-xl">
                  <p className="text-sm text-white mb-2">Soft Goods/Textile</p>
                  <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                    Soft Goods/Textile Checklist
                  </h3>
                  <p className="text-white text-sm mb-4">
                    Essential inspection points to ensure durability, safety,
                    and compliance in footwear production.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-white hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card>
            <CardContent>
              <div>
                <Image
                  src="/blogimage5.jpg"
                  alt="blogimage5"
                  height={226}
                  width={312}
                  className="w-full rounded-tl-xl rounded-tr-xl"
                />
                <div className="p-6 bg-gray-700 rounded-b-xl">
                  <p className="text-sm text-white mb-2">
                    Electronics Products Inspection
                  </p>
                  <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                    Electronics Products Checklist
                  </h3>
                  <p className="text-white text-sm mb-4">
                    Essential inspection points to ensure durability, safety,
                    and compliance in footwear production.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:text-white hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
