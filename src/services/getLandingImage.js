import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHCMS_ENDPOINT;

export const getLandingImage = async () => {
  const query = gql`
    query LandingImage {
      landingImages {
        id
        createdAt
        image {
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.landingImages[0].image;
};
