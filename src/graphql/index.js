import gql from "graphql-tag";


const products = gql`
  query($currency: Currency!) {
    products {
      id,
      title,
      image_url,
      price(currency: $currency)
    }
  }
`;

const currency = gql`
  query {
    currency
  }
`;

export { products, currency };