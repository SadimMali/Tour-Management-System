import ActivityCard from "@/components/ActivityCard";
import Hero from "@/components/home/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
        <Hero />
      <MaxWidthWrapper>


        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          <Link href="/favorites">
            {/* TODO: map the activites */}
            {/* dummy */}
            <ActivityCard img="https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lcGFsfGVufDB8fDB8fHww" 
            categoryLabel="Adventure"
            title="Skydiving in Dubai"
            metadata={["3 hours", "Medium"]}
            price="5000"
            />
          </Link>
          <Link href="/">
            <ActivityCard img="https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lcGFsfGVufDB8fDB8fHww"
            categoryLabel="Adventure"
            title="Mountain Hiking"
            metadata={["2 hours", "Easy"]}
            price="1500"
            />
          </Link>
        
         <Link href="/">
            <ActivityCard img="https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lcGFsfGVufDB8fDB8fHww"
            categoryLabel="Adventure"
            title="Mountain Hiking"
            metadata={["2 hours", "Easy"]}
            price="1500"
            />
          </Link>
        
         <Link href="/">
            <ActivityCard img="https://images.unsplash.com/photo-1516477485464-abbcea8f9b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lcGFsfGVufDB8fDB8fHww"
            categoryLabel="Adventure"
            title="Mountain Hiking"
            metadata={["2 hours", "Easy"]}
            price="1500"
            />
          </Link>
        
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
