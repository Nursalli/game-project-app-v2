import React from "react";
import { HashLoader } from "react-spinners";

function Loading({colors}) {
  return (
    <div className="bg-black bg-opacity-60 select-none absolute z-10 w-screen h-screen flex items-center justify-center">
      <div className="border w-28 h-28 flex items-center justify-center rounded-2xl bg-slate-200 p-20">
        <HashLoader size={80} color={colors} />
      </div>
    </div>
  );
}

export default Loading;
