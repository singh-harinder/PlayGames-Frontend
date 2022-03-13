import Head from "next/head";
import Link from "next/link";
import { Order, useAllOrdersQuery } from "../types/generated-queries";
import formatMoney from "../lib/formatMoney";
import LoadingAnimation from "../components/Loading";
import DisplayError from "../components/ErrorMessage";
import { OrderItem } from "../types/types";

function countItemsInOrder(order: Order) {
  return order.items.reduce((tally, item) => tally + item.quantity!, 0);
}

function OrdersPage() {
  const { data, error, loading } = useAllOrdersQuery();

  if (loading) return <LoadingAnimation />;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <Head>
        <title>PlayGames - Orders</title>
      </Head>
      <div className="flex justify-center bg-gradient-to-br from-violet-900 to-blue-500 bg-clip-text p-2 text-6xl font-extrabold text-transparent">
        All Orders
      </div>
      <div>
        {/* <h2>You have {data!.allOrders!.length} orders!</h2> */}
        <div className="grid gap-10 p-2 lg:grid-cols-2">
          {data!.allOrders!.map((order: any) => (
            <div key={order.id} className="overflow-hidden rounded-lg border-4 border-solid  p-10 shadow">
              <Link href={`/order/${order.id}`}>
                <a>
                  <div className="flex justify-around rounded-lg border-2 p-4">
                    <p className="text-xl font-semibold">
                      {countItemsInOrder(order)} Item
                      {order.items.length > 1 ? "s" : null}
                    </p>
                    <p className="text-xl font-semibold">
                      {order.items.length} Product
                      {order.items.length > 1 ? "s" : null}
                    </p>
                    <p className="text-xl font-semibold">{formatMoney(order.total)}</p>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    {order.items.map((item: OrderItem) => (
                      <img
                        className="h-full rounded-lg border-2 object-cover"
                        key={`image-${order.id}`}
                        src={item?.photo?.image?.publicUrlTransformed || ""}
                        alt={item?.photo?.altText || ""}
                      />
                    ))}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
