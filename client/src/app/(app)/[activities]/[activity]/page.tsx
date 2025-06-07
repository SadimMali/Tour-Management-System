import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StarRating from "@/components/StartRating";
import { Heart, Share } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ActivityPage() {
  const tour = {
    id: "b8a74c19-2d42-4e1b-b3c6-b4d4fc2dcd87",
    title: "Everest Base Camp Trek",
    slug: "everest-base-camp-trek",
    description:
      "A breathtaking trek to the base of the world’s highest mountain.",
    highlights: [
      "Scenic flight to Lukla",
      "View of Mount Everest",
      "Cultural experience with Sherpas",
      "Visit to Tengboche Monastery",
    ],
    images: [
      "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lcGFsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww",
    ],
    durationDays: 14,
    pricePerPerson: 1499.99,
    currency: "USD",
    rating: 4.8,
    reviewCount: 132,
    groupType: "Group",
    activityType: "Trekking",
    startingPoint: "Kathmandu",
    endingPoint: "Kathmandu",
    mapEmbedUrl: "https://www.google.com/maps/embed?...",
    createdAt: new Date("2025-06-01T10:00:00Z"),
    updatedAt: new Date("2025-06-03T09:30:00Z"),

    itinerary: [
      {
        id: "day1",
        day: 1,
        title: "Fly to Lukla & Trek to Phakding",
        description:
          "Short flight followed by a trek through the Dudh Koshi valley.",
      },
      {
        id: "day2",
        day: 2,
        title: "Trek to Namche Bazaar",
        description:
          "Steep ascent to the Sherpa capital with stunning mountain views.",
      },
      // More days...
    ],
    includes: [
      { id: "inc1", item: "All airport transfers" },
      { id: "inc2", item: "Accommodation during trek" },
      { id: "inc3", item: "Guide and porter services" },
    ],
    exclusions: [
      { id: "exc1", item: "International airfare" },
      { id: "exc2", item: "Travel insurance" },
    ],
    reviews: [
      {
        id: "rev1",
        authorName: "Jane Doe",
        rating: 5,
        comment: "Absolutely amazing experience. Well organized!",
        createdAt: new Date("2025-05-25T12:00:00Z"),
      },
      {
        id: "rev2",
        authorName: "John Smith",
        rating: 4.5,
        comment: "Beautiful scenery, great guide!",
        createdAt: new Date("2025-05-28T15:30:00Z"),
      },
    ],
  };

  return (
    <div>
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
                <button className="flex items-center align-center gap-2">
                  <Heart width={20} height={20} />
                  <span className="ml-2 text-md underline">
                    Add to Favorites
                  </span>
                </button>
                <button className="flex items-center align-center gap-2">
                  <Share width={20} height={20} className="ml-2" />
                  <span className="ml-2 underline">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* images  */}
          <div className="hidden  md:grid grid-cols-4 grid-rows-2 gap-2 mt-4 min-h-80">
            {tour.images[0] && (
              <div className="col-span-2 row-span-2 relative">
                <Image
                  fill
                  src={tour.images[0]}
                  alt="Tour image 1"
                  className="w-full h-64 object-cover rounded-lg"
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
          <div className="md:hidden">
            <Image
              src={tour.images[0]}
              alt="Tour image 1"
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* description */}
        <div>
          <p className="mt-4 text-gray-700">{tour.description}</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
