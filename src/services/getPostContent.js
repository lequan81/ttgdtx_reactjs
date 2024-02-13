import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getPostContent = async (slug) => {
  const query = gql`
    query postContent {
      posts(
        stage: PUBLISHED
        where: {slug: "${slug}"}
      ) {
        id
        title
        createdAt
        hashtag
        coverImage {
          id
          url(
            transformation: {
              document: { output: { format: webp } }
              image: { resize: { width: 400, height: 300 } }
            }
          )
        }
        content {
          json
          raw
          references {
            ... on Asset {
              id
              url(
                transformation: {
                  document: { output: { format: webp } }
                  image: { resize: { width: 400, height: 300 } }
                }
              )
              mimeType
              altText
            }
          }
        }
        category {
          name
          title
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.posts;
};
