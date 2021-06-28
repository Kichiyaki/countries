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
  const { data, loading } = useQuery<Query["continents"], any>(QUERY);
  const continents = useMemo(() => data ?? [], [data]);

  return {
    continents,
    loading,
  };
};

export default useContinents;
