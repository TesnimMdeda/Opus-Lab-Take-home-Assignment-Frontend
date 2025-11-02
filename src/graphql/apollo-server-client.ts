import { STRAPI_TOKEN } from "@/lib/utils";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getServerApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL,
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
}
