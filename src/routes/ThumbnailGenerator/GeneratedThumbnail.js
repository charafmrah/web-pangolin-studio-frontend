import React from "react";

const GeneratedThumbnail = ({ image }) => {
  return (
    <div className="mt-4 text-center">
      <img className="w-full" alt="" src={image}></img>

      <button className="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-black hover:text-white border border-transparent rounded-md shadow-sm bg-slate-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        Download
      </button>
    </div>
  );
};

export default GeneratedThumbnail;
