"use client";

import React from "react";

const GeneratedThumbnail = ({ image, loading }) => {
  return (
    <div className="mt-4 text-center">
      <img className="w-full" alt="" src={image}></img>

      {image !== "" && (
        <button className="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-black border border-transparent rounded-md shadow-sm hover:text-white bg-slate-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Save
        </button>
      )}
    </div>
  );
};

export default GeneratedThumbnail;
