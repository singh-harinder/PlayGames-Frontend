import Head from "next/head";
import { SyntheticEvent } from "react";
import useForm from "../lib/useForm";
import { useRequestResetMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
  });

  const [requestReset, { data, loading, error }] = useRequestResetMutation({
    variables: { email: inputs.email! },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await requestReset();
    resetForm();
  }

  return (
    <>
      <Head>
        <title>Play Games | Reset Password</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Request a password reset
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <DisplayError error={error} />
                {data?.sendUserPasswordResetLink === null && <p>Success! Check your email for a link!</p>}
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    disabled={loading}
                    id="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>
              <div>
                <button type="submit" disabled={loading} className="buttonstyles uppercase">
                  Request Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RequestReset;
