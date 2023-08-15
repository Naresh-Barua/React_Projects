import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/naresh-barua-964179228/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Naresh-Barua">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
