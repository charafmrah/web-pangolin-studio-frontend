import React from "react";

const ThumbnailSearch = () => {
  return (
    <>
      <div className="pt-14">
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={3}
            className=""
            placeholder="Lush green grass, blue sky, and a beautiful lake."
            defaultValue={""}
          />
        </div>

        <div className="flex justify-between mt-2">
          <p className="text-sm md:text-base text-slate-100">
            Describe the photo you want the AI to generate.
          </p>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-primary hover:bg-white py-2 px-4 text-sm font-medium text-white hover:text-primary shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default ThumbnailSearch;
