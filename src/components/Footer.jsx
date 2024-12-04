import React from "react";
import { useStateContext } from "../contexts/context";

const Footer = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © 2023{" "}
        <a
          href="https://portfolio-awadhesh.vercel.app/"
          style={{ color: currentColor }}
        >
          ad_gupta
        </a>
      </p>
    </div>
  );
};

export default Footer;
