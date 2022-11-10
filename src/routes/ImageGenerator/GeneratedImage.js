import React from "react";
import { storage, db } from "../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../contexts/AuthContext";

const GeneratedImage = ({ image, loading }) => {
  const { currentUser } = useAuth();
  console.log(currentUser.uid);

  async function handleSave() {
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
            prompt: "cat",
            public: false,
            styleId: "default",
            url: url,

            userId: "test",
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      });
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

export default GeneratedImage;
