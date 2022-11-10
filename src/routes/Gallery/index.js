import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { useAuth } from "../../contexts/AuthContext";

const Gallery = () => {
  const [imagesURLs, setImagesURLs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("generated-images")
      .where("userId", "==", currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setImagesURLs((imagesURLs) => [...imagesURLs, doc.data().url]);
        });
      })
      .catch((error) => {
        console.error("Error getting images!");
      });
  }, [currentUser.uid]);

  return (
    <div>
      <h1>Gallery</h1>
      <div className="flex flex-wrap ">
        {imagesURLs.map((image) => {
          return (
            <div className="w-1/4 p-2">
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
