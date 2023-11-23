import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getRecentPost = async () => {
  const query = gql`
    query recentPost {
      posts(orderBy: createdAt_DESC, stage: PUBLISHED, first: 6) {
        id
        title
        description
        createdAt
        slug
        coverImage {
          id
          url
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
