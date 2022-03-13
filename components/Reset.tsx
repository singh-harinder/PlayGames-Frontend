import { SyntheticEvent } from "react";
import useForm from "../lib/useForm";
import { useRedeemPasswordResetMutation } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";

function Reset({ token }: { token: string }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    token,
  });

  const [redeemPasswordReset, { data, loading, error }] = useRedeemPasswordResetMutation({
    variables: {
      email: inputs.email || "",
      password: inputs.password || "",
      token: inputs.token || "",
    },
  });

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await redeemPasswordReset();
    resetForm();
  }

  const successfulError = data?.redeemUserPasswordResetToken?.code && data.redeemUserPasswordResetToken;

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h2>Reset your password</h2>
      <DisplayError error={error || successfulError} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.redeemUserPasswordResetToken === null && <p>Success! Please sign in to your account!</p>}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            disabled={loading}
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            disabled={loading}
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="shortbuttonstyles uppercase" disabled={loading}>
          Reset Password
        </button>
      </fieldset>
    </form>
  );
}
export default Reset;
