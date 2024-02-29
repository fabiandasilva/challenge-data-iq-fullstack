"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/image/icons/nav-logo.png";

const Navbar = ({ findUser, hideSearchBar, search, setSearch }) => {
  return (
    <nav className="px-1.5 py-4 sm:p-6 w-full bg-white drop-shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Data Iq" width="110" height="56" />
        </Link>
        {!hideSearchBar && (
          <div className="w-34 sm:w-80 flex items-center h-10 rounded-md border bg-white/20 px-1 sm:px-3 py-2 text-xs">
            <span className="text-gray-500  dark:text-gray-400 border-r-2 mr-1">
              <svg
                className="mr-0 sm:mr-2 h-4 w-5 items-center stroke-slate-500 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <span className="hidden sm:block w-full ">
              <input
                type="text"
                placeholder="Buscar por nombre, email o ciudad..."
                className="flex-grow bg-transparent outline-none w-full text-sm"
                value={search}
                onChange={(e) => findUser(e)}
              />
            </span>
            <span className="sm:hidden">
              <input
                type="text"
                placeholder="Buscar..."
                className="flex-grow bg-transparent outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
