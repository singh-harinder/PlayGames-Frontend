import UpdateProfile from "../../components/UpdateProfile";

type ProfileUpdateProps = {
  query: {
    id: string;
  };
};

function UpdateProfilePage({ query }: ProfileUpdateProps) {
  return <UpdateProfile id={query.id} />;
}

export default UpdateProfilePage;
