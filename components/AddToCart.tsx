import { useAddToCartMutation, refetchUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function AddToCart({ id }: { id: string }) {
  const [addToCart, { loading, error }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [refetchUserQuery()],
  });

  if (error) return <DisplayError error={error} />;

  async function handleClick() {
    await addToCart();
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={handleClick}
      className="buttonstyles absolute bottom-0 pt-20 uppercase"
    >
      Add{loading && "ing"} To Cart
    </button>
  );
}

export default AddToCart;
