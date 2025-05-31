import Image from "next/image";
import heroBg from "../../../public/hero4.jpg";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-3rem)]">
      <Image
        src={heroBg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute bg-black/50 w-full h-full"></div>
      <MaxWidthWrapper className="">
        <div className="relative h-full  flex flex-col top-40">
          <h1 className="text-white text-6xl font-bold max-w-2xl ">
            Find your next travel experience
          </h1>

          <button className="text-md flex gap-1 mt-4 cursor-pointer items-center text-white font-bold">
            Learn more <ChevronRight />
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
