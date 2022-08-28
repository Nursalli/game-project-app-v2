import React from "react";
import Image from "next/image";

function Button({ text, className, auth, icon, ...props }) {
  return (
    <button
      className={`btn relative border rounded-full ${
        auth ? "px-12.5" : "px-10"
      } py-2 inline-flex items-center justify-start overflow-hidden transition-all bg-white hover:bg-white group`}
      {...props}
    >
      {/* purple box */}
      <span
        className={`w-0 h-full rounded ${className} absolute ${
          auth ? "right-0" : "left-0"
        } ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1`}
      ></span>
      <span className="w-full text-sm font-semibold text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
        {auth && <Image src={icon} width={18} height={18} alt="Logo" />}
        {text}
      </span>
    </button>
  );
}

export default Button;
