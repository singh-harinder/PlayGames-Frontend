import { SyntheticEvent } from "react";
import { useProductQuery, useUpdateProductMutation } from "../types/generated-queries";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function UpdateProduct({ id }: { id: string }) {
  const { data, loading, error } = useProductQuery({ variables: { id } });
  const [updateProduct, { loading: updateLoading, error: updateError }] = useUpdateProductMutation();

  const { inputs, handleChange, clearForm } = useForm({
    name: data?.Product?.name || "",
    price: data?.Product?.price || 0,
    description: data?.Product?.description || "",
  });

  if (loading) return <LoadingAnimation />;

  if (error) return <DisplayError error={error} />;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await updateProduct({
      variables: {
        id,
        name: inputs.name,
        description: inputs.description,
        price: inputs.price,
      },
    });
    clearForm();
  }

  return (
    <>
      <DisplayError error={updateError} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Update Product</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    disabled={updateLoading}
                    placeholder="Name"
                    value={inputs.name}
                    onChange={handleChange}
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    id="description"
                    disabled={updateLoading}
                    placeholder="Description"
                    required
                    className="textfield"
                    value={inputs.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="price"
                    required
                    disabled={updateLoading}
                    id="price"
                    placeholder="Price"
                    value={inputs.price}
                    className="textfield"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="buttonstyles uppercase">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
