import Router from "next/router";
import { SyntheticEvent } from "react";
import useForm from "../lib/useForm";
import { refetchUserQuery, useUpdateUserMutation, useUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

type UpdateProfileProps = {
  id: string;
};

function UpdateProfile({ id }: UpdateProfileProps) {
  const { data, loading, error } = useUserQuery();

  const user = data?.authenticatedItem;

  const { inputs, handleChange, resetForm } = useForm({
    name: user?.name || "",
    email: user?.email || "",
    House: user?.address?.house || "",
    City: user?.address?.City || "",
    State: user?.address?.State || "",
  });

  const [updateProfile] = useUpdateUserMutation({
    variables: {
      profileId: user!.id,
      addressId: user!.address!.id,
      city: inputs.City,
      email: inputs.email,
      house: inputs.House,
      name: inputs.name,
      state: inputs.State,
    },
    refetchQueries: [refetchUserQuery()],
  });

  if (loading) return <LoadingAnimation />;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await updateProfile();
    resetForm();
    void Router.push({
      pathname: "/account",
    });
  }
  return (
    <>
      <DisplayError error={error} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Update your Profile
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    disabled={loading}
                    value={inputs.name}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={inputs.email}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="House" className="block text-sm font-medium text-gray-700">
                  House
                </label>
                <div className="mt-1">
                  <textarea
                    name="House"
                    id="House"
                    placeholder="Enter your Complete Address"
                    value={inputs.House}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="City" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <div className="mt-1">
                  <input
                    name="City"
                    id="City"
                    placeholder="Enter your City"
                    value={inputs.City}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    className="textfield"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="State" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <div className="mt-1">
                  <input
                    name="State"
                    id="State"
                    placeholder="Enter your State"
                    value={inputs.State}
                    disabled={loading}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="buttonstyles uppercase">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
