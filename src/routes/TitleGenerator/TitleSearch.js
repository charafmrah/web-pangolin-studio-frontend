import React from "react";

const TitleSearch = () => {
  return (
    <>
      <div className="pt-14">
        <div className="mt-1">
          <input
            id="description"
            name="description"
            type={"text"}
            className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-x-primary focus:ring-primary"
            placeholder="Lush green grass, blue sky, and a beautiful lake."
            defaultValue={""}
          />
        </div>

        <div className="flex justify-between mt-2">
          <p className="text-sm md:text-base text-slate-100">
            Describe what the video is about.
          </p>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleSearch;
