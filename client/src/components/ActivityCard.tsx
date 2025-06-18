import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import StarRating from "./StarRating";

type ActivityCardProps = {
  img: string;
  categoryLabel: string;
  title: string;
  metadata: string[];
  price: string;
};

export default function ActivityCard({
  img,
  categoryLabel,
  title,
  metadata,
  price,
}: ActivityCardProps) {
  return (
    <Card className="flex gap-0 w-full max-w-2xl overflow-hidden rounded shadow-md py-0 group cursor-pointer">
      {/* Image Section  */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img} // replace with your image path
          alt="Activity"
          fill
          className="object-cover transition-transform transform duration-300 ease-in group-hover:scale-110"
        />
        <div className="absolute right-2 top-2">
          <Heart
            width={20}
            height={20}
            className="cursor-pointer text-white fill-gray-500/80 hover:fill-red-400 transition-colors"
          />
        </div>
      </div>

      {/* Content Section*/}
      <CardContent className="w-full px-3 py-2 flex flex-col justify-center">
        <span className="text-sm font-semibold mb-2 uppercase text-gray-500">
          {categoryLabel}
        </span>
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-gray-600 mb-2 mt-1 text-xs font-semibold">
          {metadata[0]}
        </p>
        <StarRating rating={4.8} />
        <span className="text-sm font-medium">From</span>
        <span className="text-sm font-medium">
          <span className="font-semibold">Rs {price}</span> per person
        </span>
      </CardContent>
    </Card>
  );
}
