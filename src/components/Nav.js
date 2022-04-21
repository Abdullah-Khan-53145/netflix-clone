import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        width="200"
        alt="netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Black&eyeType=Squint&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
        width="200"
        alt="netflix logo"
      />
    </div>
  );
}
