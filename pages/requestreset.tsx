import Head from "next/head";
import RequestReset from "../components/RequestReset";

function RequestResetPage() {
  return (
    <div>
      <Head>
        <title>Play Games | Request Password Reset</title>
      </Head>
      <RequestReset />
    </div>
  );
}

export default RequestResetPage;
