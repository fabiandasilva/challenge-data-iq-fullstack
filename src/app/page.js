import Navbar from "../components/NavBar";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <>
      <Navbar hideSearchBar={false} />
      <UserList />
    </>
  );
};

export default Home;
