"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { useMemo } from "react";
import { STRAPI_TOKEN } from "../utils";

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL,
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const client = useMemo(() => makeClient(), []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
