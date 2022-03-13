import Link from "next/link";
import Router from "next/router";
import { SyntheticEvent, useEffect } from "react";
import useForm from "../lib/useForm";
import { useSignInMutation, refetchUserQuery, useUserQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function SignIn() {
  const user = useUserQuery();

  useEffect(() => {
    if (user.data?.authenticatedItem) {
      Router.push({
        pathname: "/",
      }).catch(() => {});
    }
  });
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [signIn, { data, loading }] = useSignInMutation({
    variables: { email: inputs.email || "", password: inputs.password || "" },
    refetchQueries: [refetchUserQuery()],
  });

  if (loading) return <LoadingAnimation />;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signIn();
    resetForm();
  }

  const error =
    data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" &&
    data.authenticateUserWithPassword;

  return (
    <>
      <DisplayError error={error} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Signin to your account
          </h2>
          <p className="max-w mt-4 p-2 text-center text-xl text-gray-600">
            Don't have an account?
            <Link href="/signup">
              <a className="ml-2 font-medium text-custompurple hover:text-blue-700 focus:outline-none">
                Sign Up for an account
              </a>
            </Link>
          </p>
          <p className="max-w mt-2 text-center text-xl text-gray-600">
            Forgot your password?
            <Link href="/reset">
              <a className="ml-2 font-medium text-custompurple hover:text-blue-700 focus:outline-none">
                Request a Password Reset
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    disabled={loading}
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    disabled={loading}
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="buttonstyles uppercase" disabled={loading}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
