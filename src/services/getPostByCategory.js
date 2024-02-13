import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getPostByCategory = async (categoryName) => {
  const query = gql`
    query postByCategory {
      postsConnection(
        orderBy: createdAt_DESC
        stage: PUBLISHED
        where: { category: { title: "${categoryName}" } }
      ) {
        edges {
          node {
            id
            title
            description
            slug
            createdAt
            coverImage {
              id
              url(
                transformation: {
                  document: { output: { format: webp } }
                  image: { resize: { width: 400, height: 300 } }
                }
              )
            }
            category {
              title
              name
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.postsConnection.edges;
};
