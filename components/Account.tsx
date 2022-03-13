import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import OrdersPage from "../pages/orders";
import { useUserQuery } from "../types/generated-queries";
import LoadingAnimation from "./Loading";
import DisplayError from "./ErrorMessage";

function Account() {
  const { data, loading, error } = useUserQuery();

  const [profile, setProfile] = useState<boolean>(true);
  const [orders, setOrders] = useState<boolean>(false);
  const [selling, setSelling] = useState<boolean>(false);

  const user = data?.authenticatedItem;

  if (loading) return <LoadingAnimation />;
  if (error) return <DisplayError error={error} />;

  return (
    <div className="absolute left-0 m-0 flex h-full w-full grid-cols-5 flex-col items-stretch gap-4 bg-gray-200 p-0 md:grid">
      <div className="col-span-1 h-full rounded-xl bg-white p-4 shadow-md">
        <h1 className="flex justify-center bg-gradient-to-br from-violet-900 to-blue-500 bg-clip-text font-extrabold text-transparent md:text-4xl lg:text-6xl xs:text-6xl">
          Menu
        </h1>
        <nav className="h-full">
          <ul className="flex h-full flex-1 flex-col items-center">
            <button
              type="button"
              className="sideBarButtonStyles"
              onClick={() => {
                setOrders(false);
                setSelling(false);
                setProfile(true);
              }}
            >
              Profile
            </button>
            <button
              type="button"
              className="sideBarButtonStyles"
              onClick={() => {
                setProfile(false);
                setSelling(false);
                setOrders(true);
              }}
            >
              Orders
            </button>
            <button
              type="button"
              className="sideBarButtonStyles"
              onClick={() => {
                setProfile(false);
                setOrders(false);
                setSelling(true);
              }}
            >
              Selling
            </button>
          </ul>
        </nav>
      </div>

      <div className="col-span-4 flex flex-col rounded-xl bg-white shadow-md">
        <div className="flex justify-center ">
          <h1 className="flex bg-gradient-to-br from-violet-900 to-blue-500 bg-clip-text p-2 text-6xl font-extrabold text-transparent">
            {profile && <h1>Profile</h1>}
            {orders && <h1>Orders</h1>}
            {selling && <h1>Selling</h1>}
          </h1>
        </div>

        {/* Profile */}
        {profile && (
          <div className="h-full bg-gray-200">
            <div className="h-full flex-col">
              <div className="flex h-full flex-col items-start bg-white p-4 text-xl shadow-md">
                <span className="accountstyles">Name: {user?.name}</span>
                <span className="accountstyles">Email Address: {user?.email}</span>
                <span className="accountstyles">Complete Address: {user?.address?.house}</span>
                <span className="accountstyles">City: {user?.address?.City}</span>
                <span className="accountstyles">State: {user?.address?.State}</span>
                <button
                  type="button"
                  className="shortbuttonstyles mt-5 ml-5"
                  onClick={() => {
                    void Router.push({
                      pathname: `/updateprofile/${user?.id}`,
                    });
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selling */}
        {selling && (
          <div className="md:grid md:grid-cols-2">
            {user?.products.map((product) => (
              <>
                <Link href={`/product/${product.id}`}>
                  <div key={product.id} className="justify-center p-3 md:flex">
                    <div className="cursor-pointer rounded-lg border-2 border-gray-200 p-4 shadow-xl">
                      <p className="p-1 font-semibold">Name: {product.name}</p>
                      <p className="p-1 font-semibold">Price: {product.price}</p>
                      <p className="p-1 font-semibold">ID: {product.id}</p>
                      <img
                        src={product.photo?.image?.publicUrlTransformed || ""}
                        alt="ProductImage"
                        className="mt-2 h-52 rounded-lg"
                      />
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        )}

        {/* Orders */}
        {orders && (
          <div>
            <OrdersPage />
          </div>
        )}
      </div>
      <Head>
        <title>Play Games | Account</title>
      </Head>
    </div>
  );
}

export default Account;
