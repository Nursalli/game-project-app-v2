import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Profile: {id}</p>;
};

export default Profile;
