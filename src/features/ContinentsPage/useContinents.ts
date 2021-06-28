import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import { Query } from "../../libs/graphql/types";

const QUERY = gql`
  query continents {
    continents {
      code
      name
    }
  }
`;

const useContinents = () => {
  const { data, loading, error } = useQuery<Query["continents"], any>(QUERY);
  const continents = useMemo(() => data ?? [], [data]);

  return {
    continents,
    loading,
    error: error?.graphQLErrors?.[0]?.message || error?.networkError?.message,
  };
};

export default useContinents;
