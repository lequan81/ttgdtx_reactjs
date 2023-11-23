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
          url
          altText
        }
        content {
          json
          raw
          references {
            ... on Asset {
              id
              url
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
