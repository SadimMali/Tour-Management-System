import { tour } from "@/utils/dummy-data";
import Image from "next/image";
import StarRating from "../StarRating";

export default function CartItem({ activity }: { activity: typeof tour }) {
  if (!activity) return null;
  return (
    <div className="flex  gap-2 border border-gray-200 rounded-md">
      {/* img */}
      <div className="w-48  relative">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      {/* content */}

      <div className="flex p-4 justify-between w-full ">
        {/* content-left */}
        <div>
          <h3 className="text-sm text-gray-600 font-semibold">{activity.activityType}</h3>
          <p className="text-lg font-semibold">{activity.title}</p>
        </div>

        {/* content-right */}
        <div className="flex flex-col text-right">
          <div >
            <span className="flex gap-2 ">{tour.rating} <span>{<StarRating rating={tour.rating} />}</span></span>
            
            <span className="text-sm">({tour.reviewCount} reviews)</span>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <span className="text-sm">From</span>
            <span className="text-md font-bold"> {tour.pricePerPerson}</span>
            <span className="text-sm">per person</span>
          </div>
        </div>
      </div>
    </div>
  );
}
