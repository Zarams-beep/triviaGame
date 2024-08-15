import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./Context";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
const Footer = () => {
  const { isSwitch, handleSwitch } = useContext(GlobalContext);
  return (
    <>
      <footer>
        <button
          onClick={handleSwitch}
          className={`btnSwitch ${isSwitch ? "switchlight" : "switchDark"}`}
        >
          {isSwitch ? (
            <IoSunnyOutline className="btnLight" />
          ) : (
            <IoIosMoon className="btbDark" />
          )}
        </button>
      </footer>
    </>
  );
};
export default Footer;
