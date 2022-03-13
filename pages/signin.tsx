import Head from "next/head";
// import RequestReset from '../components/RequestReset';
import SignIn from "../components/SignIn";

function SignInPage() {
  return (
    <div>
      <Head>
        <title>Play Games | Sign In</title>
      </Head>
      <SignIn />
      {/* <RequestReset /> */}
    </div>
  );
}

export default SignInPage;
