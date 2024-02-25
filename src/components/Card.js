import Image from "next/image";
import Link from "next/link";

import { Email, Location, Phone, Work } from "../../public/image/icons/index";

const Card = ({ user }) => {
  return (
    <div className="mb-24 md:mb-0">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-[75px]">
            <Image
              src={user.pictureUrl.large}
              className="mx-auto rounded-full shadow-lg  w-[150px]"
              alt={user.name}
              width="110"
              height="110"
            />
          </div>
        </div>
        <div className="px-6 pb-6 pt-2">
          <h5 className="text-xl font-bold">{user.name}</h5>
          <p className="text-lg pb-4">@{user.username}</p>
          <div className="flex items-center gap-2">
            <Image
              src={Work}
              width="30"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <Link
              href={`https://www.google.com/search?q=${user.company.name}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-zinc-700 cursor-pointer">
                {user.company.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Location}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <Link
              href={`https://www.google.com.ar/maps/search/${user.address.city}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-zinc-700 cursor-pointer">
                {user.address.city}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Email}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <Link
              href={`mailto:${user.email}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-zinc-700 cursor-pointer">{user.email}</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Phone}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <span className="text-zinc-700 cursor-pointer">{user.phone}</span>
          </div>

          <div className="flex items-center justify-center pt-6">
            <Link href={`/${user.id}`}>
              <button className="bg-[#6D8A96] hover:bg-[#a0b3ba] text-white text-sm font-bold py-2 px-4 rounded">
                Más info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
