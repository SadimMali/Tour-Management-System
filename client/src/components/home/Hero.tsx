import Image from "next/image";
import heroBg from "../../../public/hero.jpg";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const activityCategories: { label: string; icon: string }[] = [
    { label: "Adventure", icon: "🏞️" },
    { label: "Culture", icon: "🏛️" },
    { label: "Relaxation", icon: "🧘" },
  ];
  return (
    <section className="relative w-full h-[calc(100vh-3rem)] mb-20">
      <Image
        src={heroBg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute bg-black/50 w-full h-full"></div>
      <MaxWidthWrapper className="flex flex-col relative z-10 h-full">
        <div className="relative h-full  flex flex-col top-40">
          <h1 className="text-white text-6xl font-bold max-w-2xl ">
            Find your next travel experience
          </h1>

          <button className="text-md flex gap-1 mt-8 cursor-pointer items-center text-white font-bold">
            Learn more <ChevronRight />
          </button>
        </div>

        {/* activity categories btn map data */}
        <div className="self-center">
          <section className="relative z-20 flex gap-4 justify-center">
            {activityCategories.map((category) => (
              <button
                key={category.label}
                className=" text-white px-5 rounded-t-3xl flex items-center gap-2 text-3xl py-5 font-bold hover:bg-white hover:text-black transition"
              >
                <span className="text-xl">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </section>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
