import Head from "next/head";
import { useGetOrderQuery } from "../../types/generated-queries";
import formatMoney from "../../lib/formatMoney";
import LoadingAnimation from "../../components/Loading";
import DisplayError from "../../components/ErrorMessage";

type SingleOrderPageProps = {
  query: {
    id: string;
  };
};

function SingleOrderPage({ query }: SingleOrderPageProps) {
  const { data, error, loading } = useGetOrderQuery({
    variables: { id: query.id },
  });

  if (loading) return <LoadingAnimation />;

  if (error) return <DisplayError error={error} />;

  return (
    <div className="pb-20">
      <Head>
        <title>Play Games - {data?.Order?.id}</title>
      </Head>
      <p className="flex justify-center p-2">
        <span className="pr-2 font-semibold">Order Id:</span>
        <span className="font-semibold">{data?.Order?.id}</span>
      </p>
      <p className="flex justify-center p-2">
        <span className="pr-2 font-semibold">Order Total:</span>
        <span className="font-semibold">{formatMoney(data!.Order!.total!)}</span>
      </p>
      <p className="flex justify-center p-2">
        <span className="pr-2 font-semibold">Item Count:</span>
        <span className="font-semibold">{data!.Order!.items.length}</span>
      </p>
      <div className="flex flex-col items-center justify-between p-4 lg:flex lg:flex-row lg:flex-wrap lg:justify-around">
        {data!.Order!.items.map((item) => (
          <div className="order-item m-4 justify-between rounded-xl border-4 p-4" key={item.id}>
            <img src={item.photo!.image!.publicUrlTransformed!} alt={item.photo!.altText!} className="h-96" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {formatMoney(item.price!)}</p>
              <p>Sub Total: {formatMoney(item.price! * item.quantity!)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleOrderPage;
