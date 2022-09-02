import React from "react";

function Input({ text, className, auth, icon, ...props }) {
  return (
    <div className="mt-6">
      <p className="font-normal text-black text-l">{props.title}</p>
      <input
        type={props.type}
        className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        id="exampleInput124"
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
}

export default Input;
