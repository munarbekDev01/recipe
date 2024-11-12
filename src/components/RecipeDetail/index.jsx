import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import style from "./details.module.css";
const RecipeDetail = () => {
  const [detailData, setDetailData] = useState();
  const { id } = useParams();
  async function getAll(params) {
    await axios
      .get("https://6731d3e77aaf2a9aff12528f.mockapi.io/api/v1/apiForKuhnya")
      .then((res) => {
        const result = res.data.filter((el) => el.id === id);
        setDetailData(result);
        console.log(detailData.map((el) => el));
      });
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="container">
      {detailData &&
        detailData.map((el) => (
            <div className={style.content}>
                <img src={el.url} className={style.img} alt="" />
                    <div className={style.text}>
                        <h1 className={style.title}>{el.title}</h1>
                        
                    </div>



            </div>
        ))}
    </div>
  );
};

export default RecipeDetail;
