import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { useAuth } from "../../contexts/AuthContext";
import RiseLoader from "react-spinners/RiseLoader";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [imagesURLs, setImagesURLs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("generated-images")
      .where("userId", "==", currentUser.uid)
      .get()
      .then((querySnapshot) => {
        setImagesURLs([]);
        querySnapshot.forEach((doc) => {
          setImagesURLs((imagesURLs) => [...imagesURLs, doc.data().url]);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error getting images!");
      });
  }, [currentUser.uid]);

  return (
    <div className="">
      <h1>Gallery</h1>
      {loading ? (
        <RiseLoader color={"#D07A3B"} size={50} className="pt-10" />
      ) : (
        <div className="flex flex-wrap max-w-6xl">
          {imagesURLs.map((image) => {
            return (
              <div className="w-1/4 p-2">
                <img src={image} alt="" className="rounded-md shadow-lg" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
