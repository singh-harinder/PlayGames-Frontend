import Link from "next/link";
import { SyntheticEvent } from "react";
import useForm from "../lib/useForm";
import { useSignUpMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const [signUp, { data, loading, error }] = useSignUpMutation({
    variables: {
      name: inputs.name || "",
      email: inputs.email || "",
      password: inputs.password || "",
    },
  });

  if (loading) return <LoadingAnimation />;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signUp();
    resetForm();
  }

  return (
    <>
      <DisplayError error={error} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {data?.createUser && <p>Signed up with {data.createUser.email} - Please go ahead and sign in!</p>}
          <h2 className="mt-6 bg-gradient-to-br from-pink-400 to-red-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
            Create an account
          </h2>
          <p className="max-w mt-4 p-2 text-center text-xl text-gray-600">
            Already registered?
            <Link href="/signin">
              <a className="ml-2 font-medium text-custompurple hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-custompurplehover">
                Sign in
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white py-8 px-6 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    disabled={loading}
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="name"
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
                    disabled={loading}
                    id="password"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={handleChange}
                    required
                    className="textfield"
                  />
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading} className="buttonstyles uppercase">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
