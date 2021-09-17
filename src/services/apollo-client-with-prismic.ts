import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

const REPOSITORY_NAME = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: PrismicLink({
    uri: `https://${REPOSITORY_NAME}.cdn.prismic.io/graphql`,
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_MASTER_TOKEN,
  }),
});

export default client;
