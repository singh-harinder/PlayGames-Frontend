import { refetchUserQuery, useSignOutMutation } from "../types/generated-queries";

function SignOut() {
  const [signOut] = useSignOutMutation({
    refetchQueries: [refetchUserQuery()],
  });

  async function handleClick() {
    await signOut();
  }

  return (
    <button type="button" onClick={handleClick} className="font-bold uppercase hover:text-custompurple">
      Sign Out
    </button>
  );
}

export default SignOut;
