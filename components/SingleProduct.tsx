import Head from "next/head";
import Router from "next/router";
import formatMoney from "../lib/formatMoney";
import { refetchUserQuery, useAddToCartMutation, useProductQuery, useUserQuery } from "../types/generated-queries";
import DeleteProduct from "./DeleteProduct";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function SingleProduct({ id }: { id: string }) {
  const { data, loading, error } = useProductQuery({
    variables: { id },
  });

  const user = useUserQuery();

  const [addToCart, { loading: addToCartLoading }] = useAddToCartMutation({
    variables: { id },
    refetchQueries: [refetchUserQuery()],
  });

  async function handleClick() {
    await addToCart();
  }

  if (loading) return <LoadingAnimation />;
  if (error) return <DisplayError error={error} />;

  return (
    // Main grid
    <div className="absolute left-0 grid h-full w-full grid-cols-1 lg:grid-cols-5">
      <Head>
        <title>Play Games | {data?.Product?.name}</title>
      </Head>
      <div className="col-span-1">
        <div className="justify-center p-4 xs:flex">
          <img
            src={data?.Product?.photo?.image?.publicUrlTransformed || ""}
            alt={data?.Product?.photo?.altText || ""}
          />
        </div>
      </div>

      {/* two side flex containers product title and description with buttons */}
      <div className="col-span-4 flex flex-col">
        {/* title div */}
        <div>
          <div className="flex justify-center p-2 text-xl font-semibold">
            <span className="-rotate-1 -skew-x-6 justify-center bg-black p-2 text-4xl text-white">
              {data?.Product?.name}
            </span>
          </div>

          {/* price tag */}
          <div className="flex justify-center pb-3">
            <span className="ml-2 mr-2 h-16 rotate-3 bg-red-600 p-5 text-xl text-white md:text-4xl">
              {formatMoney(data?.Product?.price || 0)}
            </span>
          </div>

          {/* BUttons */}
          <div className="flex justify-around p-4">
            {user.data?.authenticatedItem?.id === data?.Product?.user?.id && (
              <button
                type="button"
                className="shortbuttonstyles"
                onClick={() => {
                  Router.push({
                    pathname: "/update",
                    query: {
                      id: data?.Product?.id,
                    },
                  }).catch(() => {});
                }}
              >
                Edit
              </button>
            )}

            {user.data?.authenticatedItem && (
              <button type="button" className="shortbuttonstyles" disabled={addToCartLoading} onClick={handleClick}>
                Add{loading && "ing"} To Cart
              </button>
            )}

            {!user.data?.authenticatedItem && (
              <button
                type="button"
                className="shortbuttonstyles uppercase"
                onClick={() => {
                  Router.push({
                    pathname: "/signin",
                  }).catch(() => {});
                }}
              >
                Sign In to add to cart
              </button>
            )}

            {user.data?.authenticatedItem?.id === data?.Product?.user?.id && (
              <DeleteProduct id={data?.Product?.id || ""}>Delete</DeleteProduct>
            )}
          </div>
        </div>

        {/* description div */}
        <div>
          <p className="text-xl font-bold">Description</p>
          <p className="ml-10 p-4">{data?.Product?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
