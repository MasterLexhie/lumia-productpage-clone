import gql from "graphql-tag";


const products = gql`
  query {
    products {
      id,
      title,
      image_url,
      price(currency: USD)
    }
  }
`;

const currency = gql`
  query {
    currency
  }
`;

export { products, currency };