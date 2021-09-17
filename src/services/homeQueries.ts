import { gql } from "@apollo/client";
import { RichTextBlock } from "prismic-reactjs";
import client from "./apollo-client-with-prismic";

export type PrejudiceApi = {
  node: {
    title: RichTextBlock[];
    prejudice: RichTextBlock[];
    explanation: RichTextBlock[];
  };
};

const allPrejudicesQuery = gql`
  {
    allPrejudices {
      edges {
        node {
          title
          prejudice
          explanation
        }
      }
    }
  }
`;

export async function fetchHomeData() {
  const res = await client.query<{ allPrejudices: { edges: PrejudiceApi[] } }>({
    query: allPrejudicesQuery,
  });
  return res?.data?.allPrejudices?.edges;
}
