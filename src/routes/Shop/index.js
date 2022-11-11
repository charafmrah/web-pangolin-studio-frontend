import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";

const Shop = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    db.collection("styles")
      .where("public", "==", true)
      .get()
      .then((querySnapshot) => {
        setStyles([]);
        querySnapshot.forEach((doc) => {
          setStyles((styles) => [...styles, doc.data()]);
        });
      })
      .catch(() => {
        console.error("Error getting images!");
      });
  }, []);

  return (
    <div className="">
      <h1>Gallery</h1>
      <div className="flex flex-wrap max-w-6xl">
        {styles.map((style) => {
          return (
            <div className="w-1/4 p-2 transition ease-in-out">
              <p className="text-white text-lg ">{style.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
