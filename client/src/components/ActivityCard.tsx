import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function ActivityCard({ img }: { img: string }) {
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
      <CardContent className="w-full px-2 py-1 flex flex-col justify-center">
        <h3 className="text-xl font-semibold mb-2">Mountain Hike</h3>
        <p className="text-gray-600 mb-3">
          Explore the breathtaking trails of the Himalayas with our guided
          mountain hike tour.
        </p>
        <span className="text-sm font-medium text-blue-600">Starts at $49</span>
      </CardContent>
    </Card>
  );
}
