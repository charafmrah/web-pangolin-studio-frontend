import React from "react";
import { storage, db } from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../contexts/AuthContext";
import { GridLoader } from "react-spinners";

const GeneratedImage = ({ image, loading }) => {
  const { currentUser } = useAuth();

  async function handleSave(e) {
    e.preventDefault();

    var metadata = {
      contentType: "image/png",
    };

    // Create a reference to the image
    let blob = await fetch(image).then((r) => r.blob());

    var imageRef = storage.ref().child("images/" + uuidv4() + ".png");

    imageRef.put(blob, metadata).then((snapshot) => {
      // get the download URL from storage
      imageRef.getDownloadURL().then((url) => {
        db.collection("generated-images")
          .doc()
          .set({
            prompt: "",
            public: false,
            styleId: "default",
            url: url,
            userId: currentUser.uid,
          })
          .then(() => {
            console.log("Document successfully written!");
            image = null;
          })
          .catch((error) => {
            console.error("Error writing document");
          });
      });
    });
  }

  return (
    <div className="ml-auto mr-auto mt-11">
      {loading ? (
        <GridLoader color={"#D07A3B"} size={120} className="min-w-full" />
      ) : (
        <img
          className="md:max-w-[70%] lg:max-w-[50%] w-full rounded-md shadow-lg"
          alt=""
          src={image}
        ></img>
      )}

      {image !== null && !loading && (
        <button
          className="inline-flex justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-black border border-transparent rounded-md shadow-sm hover:text-white bg-slate-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={handleSave}
        >
          Save to gallery
        </button>
      )}
    </div>
  );
};

export default GeneratedImage;
