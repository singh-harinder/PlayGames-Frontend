import { ApolloError } from "@apollo/client";
import { RedeemUserPasswordResetTokenResult } from "../types/generated-queries";

type DisplayErrorProps = {
  error:
    | ApolloError
    | { __typename?: "UserAuthenticationWithPasswordFailure" | undefined; message: string }
    | RedeemUserPasswordResetTokenResult
    | false
    | undefined;
};

function DisplayError({ error }: DisplayErrorProps) {
  if (!error || !error.message) return null;

  return (
    <div className="mx-0 my-8 border border-solid border-black bg-white p-8">
      <p className="font-semibold" data-test="graphql-error">
        <strong className="mr-4">Error!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  );
}

export default DisplayError;
