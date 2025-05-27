import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Heart, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";

export const navLinks: {
  id: number;
  icon: React.ReactNode;
  name: string;
  route: string;
}[] = [
  {
    id: 1,
    icon: <Heart width={20} height={20} />,
    name: "Favorite",
    route: "/favorites",
  },
  {
    id: 2,
    icon: <ShoppingCart width={20} height={20} />,
    name: "Cart",
    route: "/cart",
  },
  {
    id: 3,
    icon: <Users width={20} height={20} />,
    name: "Profile",
    route: "/hero",
  },
];

export default function NavbarNav() {

  return (
    <nav className="py-5">
      <MaxWidthWrapper className="flex justify-between">
        {/* brand logo */}
        <div>
          <Link href='/' className="font-semibold"> Tour</Link>
        </div>
        {/* nav links */}
        <div className="flex gap-4">
          {navLinks.map((nv) => (
            <Link
            href={nv.route}
              key={nv.id}
              className="understroke flex flex-col gap-1 items-center px-2  font-serif font-bold text-[#63687a]"
            >
              {nv.icon}
              <span className="hidden md:block text-sm">{nv.name}</span> 
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
