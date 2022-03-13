import { SyntheticEvent } from "react";
import Router from "next/router";
import useForm from "../lib/useForm";
import { useCreateProductMutation, refetchAllProductsQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import Head from "next/head";

function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    name: "",
    price: 0,
    description: "",
  });

  const [createProductMutation, { error, loading }] = useCreateProductMutation({
    variables: {
      name: inputs.name || "",
      price: inputs.price || 0,
      description: inputs.description || "",
      image: inputs.image,
    },
    refetchQueries: [refetchAllProductsQuery()],
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const res = await createProductMutation();
    clearForm();
    Router.push({
      pathname: `/product/${res.data?.createProduct?.id}`,
    }).catch(() => {});
  }

  return (
    <>
      <DisplayError error={error} />
      <Head>
        <title>Play Games | Sell a Game</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-violet-900 to-blue-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Sell a Game
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <label htmlFor="image">
                Image
                <input
                  type="file"
                  name="image"
                  disabled={loading}
                  id="image"
                  required
                  onChange={handleChange}
                  className="textfield"
                />
              </label>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    disabled={loading}
                    placeholder="Name"
                    value={inputs.name}
                    required
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
                    disabled={loading}
                    required
                    placeholder="Description"
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
                    disabled={loading}
                    id="price"
                    placeholder="Price"
                    value={inputs.price}
                    required
                    className="textfield"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="buttonstyles uppercase">
                  + Add Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
