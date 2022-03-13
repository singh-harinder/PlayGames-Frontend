import { useDeleteCartItemMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({ id }: { id: string }) {
  const [removeFromCart, { loading, error }] = useDeleteCartItemMutation({
    variables: { id },
    update,
  });

  if (loading) return <LoadingAnimation />;
  if (error) return <DisplayError error={error} />;

  async function handleClick() {
    await removeFromCart();
  }

  return (
    <button title="Remove this item from cart" type="button" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
}

export default RemoveFromCart;
