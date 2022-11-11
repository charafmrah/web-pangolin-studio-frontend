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
    <div>
    <h1>My Gallery</h1>
      {loading ? (
        <div className="min-h-[60%] flex flex-col justify-center items-center">
          <RiseLoader color={"#D07A3B"} size={30} />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center max-w-6xl">
          {imagesURLs.map((image) => {
            return (
              <div className="w-1/4 min-w-fit p-2">
                <img
                  src={image}
                  alt=""
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
