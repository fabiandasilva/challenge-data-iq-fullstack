import React from "react";
import Image from "next/image";
import Github from "../../public/image/icons/github.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center gap-2 bg-white h-20 justify-end px-5">
        <a href="https://github.com/fabiandasilva" target="_blank">
          <Image
            src={Github}
            width="20"
            height="20"
            alt="icon"
            className="h-5 w-5"
          />
        </a>
        <span className="text-zinc-700 cursor-pointer">
          <a href="https://www.linkedin.com/in/fabiandasilva/" target="_blank">
            Fabian Da Silva
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
