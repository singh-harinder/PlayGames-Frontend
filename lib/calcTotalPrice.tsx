// import { CartItem } from "../types/generated-queries";

export default function calcTotalPrice(cart: any) {
  return cart.reduce((tally: number, cartItem: any) => {
    if (!cartItem.quantity || !cartItem.product || !cartItem.product.price) return tally;

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
