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
    <div>
      <h1 className="mb-2 md:mb-5">Shop</h1>
      <p className="text-white text-center mb-5 md:mb-16">
        Discover and add new styles to your toolbox
      </p>
      <div className="flex flex-wrap overflow-hidden justify-center gap-5 max-w-full">
        {styles.map((style) => {
          return (
            <div className=" min-w-min md:w-1/4 shadow-lg rounded-md bg-primary">
              <img src={style.image} alt="" className="w-full shadow-lg" />

              <div className="p-2 text-white">
                <h3 className=" text-white text-lg font-bold">{style.name}</h3>
                <p>{style.description}</p>
                <p className="font-bold text-2xl">${style.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
