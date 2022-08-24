import { useRouter } from "next/router";

const Games = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Games: {id}</p>;
};

export default Games;
