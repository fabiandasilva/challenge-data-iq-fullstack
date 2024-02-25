import CardDescription from "@/components/CardDescription";
import Navbar from "@/components/NavBar";

const page = () => {
  return (
    <>
      <Navbar hideSearchBar={true} />
      <div className="container my-5 mx-auto px-4 py-8 max-w-screen-md bg-white">
        <CardDescription />
      </div>
    </>
  );
};

export default page;
