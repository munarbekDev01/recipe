import React from "react";
import style from "./favor.module.css";
import RecipeCard from "../RecipeCard";
import { useEffect } from "react";
const Favorites = () => {
  const all = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(all);
  useEffect(() => {
    JSON.parse(localStorage.getItem("favorites")) || [];
  }, [all]);
  return (
    <div className="hame">
      <div className="container">
        {all && all.map((el) => <RecipeCard el={el} key={el.id} />)}
      </div>
    </div>
  );
};

export default Favorites;