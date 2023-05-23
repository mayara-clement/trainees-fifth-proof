import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://lobster-app-2fa5v.ondigitalocean.app/graphql',
  cache: new InMemoryCache(),
});


export default client