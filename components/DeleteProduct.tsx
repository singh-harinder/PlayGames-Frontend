import Router from "next/router";
import { ReactNode } from "react";
import { useDeleteProductMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

type DeleteProductProps = {
  id: string;
  children: ReactNode;
};

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({ id, children }: DeleteProductProps) {
  const [deleteProduct, { loading, error }] = useDeleteProductMutation({
    variables: { id },
    update,
  });

  if (error) return <DisplayError error={error} />;

  async function handleClick() {
    const response = window.confirm("Are you sure you want to delete this item?");
    if (response) {
      await deleteProduct().catch((err) => alert(err));
      Router.push({
        pathname: "/",
      }).catch(() => {});
    }
  }

  return (
    <button type="button" disabled={loading} onClick={handleClick} className="shortbuttonstyles">
      {children}
    </button>
  );
}

export default DeleteProduct;
