import React from "react";
import style from "./header.module.css";
import img from "../../assets/4047768.png";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  console.log(value);
  function handleSearch(params) {

    nav(`/search/${value}`);
  }

    const handleKeyDown = (event) => {
        
        if (event === "Enter") {
            handleSearch();
        }
      };
  return (
    <header className="">
      <div className="container">
        <div className={style.header}>
          <div onClick={() => nav("/")} className={style.hea}>
            <img width={50} src={img} alt="" />
            <h1>Кулинария</h1>
          </div>
          <div className={style.der}>
            <div className={style.inp}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={style.input}
                type="text"
                placeholder="исать по ингредиентам"
                onKeyDown={(e) => handleKeyDown(e.key)}
              />
              <button onClick={() => handleSearch()} className={style.button}>
                искать
              </button>
            </div>
            <div className={style.navs}>
              <Link className={style.a} to={"/favorites"}>
                <MdOutlineFavorite />
              </Link>
              <Link className={style.cre} to={"/creator"}>
                <IoIosCreate />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
