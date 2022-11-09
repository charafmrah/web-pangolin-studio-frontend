import React from "react";
import { storage } from "../../utils/firebase";

const GeneratedThumbnail = ({ image, loading }) => {
  async function handleSave() {
    const storageRef = storage.ref(storage, image);
    storage.uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  }

  return (
    <div className="mt-4 text-center">
      <img className="w-full" alt="" src={image}></img>

      {image !== "" && (
        <button
          className="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-black hover:text-white border border-transparent rounded-md shadow-sm bg-slate-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={handleSave}
        >
          Save to gallery
        </button>
      )}
    </div>
  );
};

export default GeneratedThumbnail;
