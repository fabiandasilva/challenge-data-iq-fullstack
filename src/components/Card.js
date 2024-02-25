import Image from "next/image";
import Link from "next/link";

import { Email, Location, Phone, Work } from "../../public/image/icons/index";

const Card = () => {
  return (
    <div className="mb-24 md:mb-0">
      <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex justify-center">
          <div className="flex justify-center -mt-[75px]">
            <Image
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
              className="mx-auto rounded-full shadow-lg  w-[150px]"
              alt="Avatar"
              width="110"
              height="110"
            />
          </div>
        </div>
        <div className="px-6 pb-6 pt-0">
          <h5 className="text-xl font-bold">Nombre</h5>
          <p className="text-md pb-4">@Usuario</p>
          <div className="flex items-center gap-2">
            <Image
              src={Phone}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />

            <span className="text-zinc-700 cursor-pointer">Telefono</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Email}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <span className="text-zinc-700 cursor-pointer">Correo</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Work}
              width="30"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <span className="text-zinc-700 cursor-pointer">
              Nombre de la empresa
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={Location}
              width="20"
              height="20"
              alt="icon"
              className="h-5 w-5"
            />
            <span className="text-zinc-700 cursor-pointer">Ciudad</span>
          </div>
          <div className="flex items-center justify-center pt-5">
            <Link href={`/1`}>
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
