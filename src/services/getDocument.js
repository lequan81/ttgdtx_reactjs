import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getDocument = async () => {
  const query = gql`
    query getDocument {
      documents(orderBy: createdAt_DESC, stage: PUBLISHED) {
        createdAt
        id
        title
        description
        fileName
        url
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.documents;
};
