import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
// import { CartItem as CartItemType } from "../types/types";
import { useUserQuery } from "../types/generated-queries";
import RemoveFromCart from "./RemoveFromCart";
import Checkout from "./Checkout";
import Head from "next/head";
import LoadingAnimation from "./Loading";
import DisplayError from "./ErrorMessage";
import Router from "next/router";

type CartItemProps = { cartItem: any };

function CartItem({ cartItem }: CartItemProps) {
  const { product } = cartItem;

  return (
    <div className="flex items-center justify-around p-4">
      <img width="100" src={product?.photo?.image?.publicUrlTransformed || ""} alt={product?.photo?.altText || ""} />
      <div className="w-36">
        <h3 className="p-2 font-semibold">{product?.name}</h3>
        <p className="p-2 font-semibold">{formatMoney((product?.price || 0) * (cartItem.quantity || 0))}</p>
        <p className="p-2 font-semibold">
          <em>
            {cartItem.quantity} &times; {formatMoney(product?.price || 0)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </div>
  );
}

function Cart() {
  const me = useUserQuery();

  if (!me.data?.authenticatedItem) return null;

  if (me.loading) return <LoadingAnimation />;
  if (me.error) return <DisplayError error={me.error} />;

  return (
    <div>
      <Head>
        <title>Play Games | Cart</title>
      </Head>
      <div className="p-4">
        <div className="bg-gradient-to-br from-cyan-900 to-blue-500 bg-clip-text p-2 text-2xl font-extrabold text-transparent md:text-6xl">
          {me.data.authenticatedItem.name}'s Cart
        </div>
        <ul>
          {me.data.authenticatedItem.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
        <div className="mt-5 flex flex-col items-center p-4 text-xl">
          <p className="font-bold">Delivery Address:</p>
          <div className="mt-2 ml-2 p-1">
            <p>{me.data.authenticatedItem.address?.house}</p>
            <p>{me.data.authenticatedItem.address?.City}</p>
            <p>{me.data.authenticatedItem.address?.State}</p>
          </div>
          <button
            type="button"
            className="shortbuttonstyles"
            onClick={() => {
              void Router.push({
                pathname: `/updateprofile/${me.data?.authenticatedItem?.id}`,
              });
            }}
          >
            Edit Delivery Address
          </button>
        </div>
        <footer>
          <p className="mt-10 flex justify-center p-4 text-xl font-semibold">
            Total: {formatMoney(calcTotalPrice(me.data.authenticatedItem.cart))}
          </p>
          <Checkout />
        </footer>
      </div>
    </div>
  );
}

export default Cart;
