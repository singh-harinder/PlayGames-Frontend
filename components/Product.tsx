import Link from "next/link";
import Router from "next/router";
import formatMoney from "../lib/formatMoney";
import { Product as productType, useUserQuery } from "../types/generated-queries";
import AddToCart from "./AddToCart";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

type ProductProps = { product: productType };

function Product({ product }: ProductProps) {
  const user = useUserQuery();

  if (user.loading) return <LoadingAnimation />;
  if (user.error) return <DisplayError error={user.error} />;

  return (
    <div className="card">
      <img
        className="h-96 w-full object-cover"
        src={product.photo?.image?.publicUrlTransformed || ""}
        alt={product.photo?.altText || ""}
      />
      <div className="flex-grow leading-8">
        <p className="flex justify-center">
          <Link href={`/product/${product.id}`}>
            <a className="titlestyles">{product.name}</a>
          </Link>
        </p>
        <span className="pricetag">{formatMoney(product.price || 0)}</span>
        <p className="descriptionstyles">
          {product.description!.length > 200 && product.description?.slice(0, 200).concat("........")}
          {product.description!.length < 200 && product.description}
        </p>
        <div className="flex justify-center">
          {user.data?.authenticatedItem && <AddToCart id={product.id} />}
          {!user.data?.authenticatedItem && (
            <button
              type="button"
              className="buttonstyles absolute bottom-0 uppercase"
              onClick={() => {
                Router.push({
                  pathname: "/signin",
                }).catch(() => {});
              }}
            >
              Sign In to add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
