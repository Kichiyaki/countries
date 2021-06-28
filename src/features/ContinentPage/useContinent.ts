import { gql, useQuery } from "@apollo/client";
import { Query, QueryContinentArgs } from "libs/graphql/types";

const QUERY = gql`
  query continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        emoji
        languages {
          code
          name
        }
      }
    }
  }
`;

const useContinent = (continent: string) => {
  const { data, loading, error } = useQuery<
    Pick<Query, "continent">,
    QueryContinentArgs
  >(QUERY, {
    variables: {
      code: continent,
    },
  });

  return {
    continent: data?.continent,
    loading,
    error: error?.graphQLErrors?.[0]?.message || error?.networkError?.message,
  };
};

export default useContinent;
