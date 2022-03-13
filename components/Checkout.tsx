import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { SyntheticEvent, useState } from "react";
import { useCreateOrderMutation, refetchUserQuery } from "../types/generated-queries";

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

function CheckoutForm() {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [createOrder, { error: orderError }] = useCreateOrderMutation();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setLoading(true);
    nProgress.start();

    const { error: stripeError, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: elements!.getElement(CardElement)!,
    });

    if (stripeError) {
      setError(stripeError);
      return;
    }

    const order = await createOrder({
      variables: { token: paymentMethod.id },
      refetchQueries: [refetchUserQuery()],
    });

    void router.push({
      pathname: "/order/[id]",
      query: { id: order.data!.checkout!.id },
    });

    setLoading(false);
    nProgress.done();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-52 mt-10">
      {error ? <div>{error.message}</div> : null}
      {orderError ? <div>{orderError.message}</div> : null}
      <CardElement />
      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-md border border-transparent bg-custompurple p-4 text-sm font-medium uppercase text-white shadow-sm hover:bg-custompurplehover focus:outline-none focus:ring-2 focus:ring-custompurplehover"
        >
          Checkout Now
        </button>
      </div>
    </form>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
