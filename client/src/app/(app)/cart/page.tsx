import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { tour } from "@/utils/dummy-data";
import React from "react";

export default function CartPage() {
  const cart = [{}]; // This would typically come from a global state or context
  return (
    <div>
      {cart.length > 0 ? (
        ///TODO:  Replace with array of cart items
        <MaxWidthWrapper>
          <CartItem activity={tour} />
        </MaxWidthWrapper>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
