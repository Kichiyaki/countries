import useContinents from "./useContinents";

const ContinentsPage = () => {
  const { loading, continents } = useContinents();
  console.log(loading, continents);
  return <div></div>;
};

export default ContinentsPage;
