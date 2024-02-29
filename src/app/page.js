"use client";
import { useEffect, useState } from "react";
import getUsersWithImg from "../../src/services/utils/getUsersWithImg";
import Card from "../components/Card";
import Navbar from "../components/NavBar";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [serchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsersWithImg();
      setUser(userData);
    };

    fetchData();
  }, []);

  const findUser = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    // console.log(searchValue);

    const result = user.filter(
      (users) =>
        users.name.toLowerCase().includes(search.toLowerCase()) ||
        users.username.toLowerCase().includes(search.toLowerCase()) ||
        users.address.city.toLowerCase().includes(search.toLowerCase) ||
        users.email.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(result);
  };

  useEffect(() => {
    if (search !== "") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [search]);

  const renderDisplay = search ? serchResult : user;

  return (
    <>
      <Navbar
        hideSearchBar={false}
        findUser={findUser}
        search={search}
        setSearch={setSearch}
      />

      {search !== "" && serchResult.length === 0 ? (
        <div className="container mx-auto mt-24 px-4 py-8 text-center">
          <h1 className="text-3xl font-bold">No se encontraron resultados</h1>
        </div>
      ) : (
        <div className="container mt-24 mx-auto px-4 py-8">
          <div className="grid gap-8 gap-y-8 md:gap-y-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-12">
            {loading ? (
              <>
                {renderDisplay.map((user) => (
                  <Skeleton key={user.id} />
                ))}
              </>
            ) : (
              renderDisplay.map((user) => <Card user={user} key={user.id} />)
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
