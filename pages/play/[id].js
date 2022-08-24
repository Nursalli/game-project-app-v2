import { useRouter } from "next/router";

const Play = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Play: {id}</p>;
};

export default Play;
