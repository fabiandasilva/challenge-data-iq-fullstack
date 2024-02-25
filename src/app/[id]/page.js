import CardDescription from "../../components/CardDescription";
import Navbar from "../../components/NavBar";
import getUsersWithImg from "../../services/utils/getUsersWithImg";

export async function generateMetadata({ params }) {
  const id = params.id;
  const user = await getUsersWithImg();
  const userDetail = user.find((user) => user.id === parseInt(id));

  return {
    title: `Data IQ | ${userDetail.name}`,
  };
}
const UserDetail = async ({ params }) => {
  const user = await getUsersWithImg();

  const id = params.id;
  const userDetail = user.find((user) => user.id === parseInt(id));

  return (
    <div>
      <Navbar hideSearchBar={true} />
      <div className="container my-5 mx-auto px-4 py-8 max-w-screen-md bg-white">
        {userDetail ? (
          <CardDescription userDetail={userDetail} />
        ) : (
          <div>Cargando...</div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
