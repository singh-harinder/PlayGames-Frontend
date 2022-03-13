import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import Page from "../components/Page";
import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import Router from "next/router";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { NextPageContext } from "next";
import withData from "../lib/withData";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type ApolloProps = {
  apollo: ApolloClient<any>;
};

type ApolloAppProps = ApolloProps & AppProps;

function MyApp({ Component, pageProps, apollo }: ApolloAppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

type MyAppProps = AppContext & NextPageContext;

MyApp.getInitialProps = async function ({ Component, ctx }: MyAppProps) {
  let pageProps: { query?: NextPageContext["query"] } = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
