import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const createClient = (uri: string): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    queryDeduplication: true,
    cache: new InMemoryCache({
      typePolicies: {
        Continent: {
          keyFields: ["code"],
        },
        Country: {
          keyFields: ["code"],
        },
        Language: {
          keyFields: ["code"],
        },
      },
    }),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (process.env.NODE_ENV === "development") {
          if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
            );
          }
          if (networkError) {
            console.log(`[Network error]: ${networkError}`);
          }
        }
      }),
      new HttpLink({
        uri,
      }),
    ]),
  });
};

export default createClient;
