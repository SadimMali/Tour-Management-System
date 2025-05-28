"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Heart, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthDialog from "../dialog/AuthDialog";

const navLinks = [
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
];

export default function NavbarNav() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Link
        href={link.route}
        key={link.id}
        className="understroke flex flex-col gap-1 items-center px-2 font-bold text-[#63687a]"
      >
        {link.icon}
        <span className="hidden md:block text-sm">{link.name}</span>
      </Link>
    ));

  const renderProfileDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="understroke flex flex-col gap-1 items-center font-bold text-[#63687a]">
          <Users width={20} height={20} />
          <span className="hidden md:block text-sm">Profile</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mt-2 p-5">
        <h3 className="text-lg font-semibold">Profile</h3>
        <DropdownMenuItem onClick={() => setIsAuthOpen(true)}>
          Log in or Sign up
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="sticky top-0 z-10 mb-6 py-5 w-full bg-white">
      <MaxWidthWrapper className="flex justify-between">
        {/* Brand Logo */}
        <div>
          <Link href="/" className="font-semibold font-mono text-red-400">
            Tour
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          {renderNavLinks()}
          {renderProfileDropdown()}
          <AuthDialog open={isAuthOpen} setOpen={setIsAuthOpen} />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
