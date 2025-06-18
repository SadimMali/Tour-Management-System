"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StarRating from "@/components/StarRating";
import { tour } from "@/utils/dummy-data";
import { Clipboard, Heart, Share } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";


export default function ActivityPage() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col-reverse md:flex-col ">
        <div>
          <h1 className="mt-4 md:mt-0 text-lg md:text-xl lg:text-3xl font-bold">
            {tour.title}
          </h1>
          {/* reviews */}
          <div className="mt-4 flex gap-2 justify-between">
            <div className="flex gap-2">
              {<StarRating rating={tour.rating} />}
              <span>{tour.rating}</span>
              <span className="underline">{tour.reviewCount} reviews</span>
            </div>

            {/* actions */}
            <div className="hidden md:flex gap-2 items-center ">
              <button className="flex items-center gap-2 cursor-pointer">
                <Heart width={20} height={20} />
                <span className="ml-2 text-md underline">Add to Favorites</span>
              </button>

              {/* copy link  */}
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast("Link copied to clipboard!", {
                    icon: <Clipboard width={18} height={18} />,
                  });
                }}
              >
                <Share width={20} height={20} className="ml-2" />
                <span className="ml-2 underline">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* images  */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 mt-4 min-h-80">
          {tour.images[0] && (
            <div className="col-span-2 row-span-2 relative h-full">
              <Image
                fill
                src={tour.images[0]}
                alt="Tour image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          {tour.images[1] && (
            <div className="col-span-1 row-span-2 relative">
              <Image
                fill
                src={tour.images[1]}
                alt="Tour image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          {tour.images[3] && (
            <div className="col-span-1 relative">
              <Image
                fill
                src={tour.images[2]}
                alt="Tour image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
          {tour.images[3] && (
            <div className="col-span-1 relative">
              <Image
                fill
                src={tour.images[3]}
                alt="Tour image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* mobile image carousel */}
        <div className="md:hidden min-h-64 relative">
          <Image
            fill
            src={tour.images[0]}
            alt="Tour image 1"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* description */}
      <div>
        <p className="mt-4 text-gray-700">{tour.description}</p>
      </div>
    </MaxWidthWrapper>
  );
}
