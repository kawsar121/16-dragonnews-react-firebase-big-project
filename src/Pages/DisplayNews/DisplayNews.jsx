import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import ShowData from "../ShowData/ShowData";

const DisplayNews = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
   <div>
    <h1 className="text-5xl font-semibold text-black my-4">Dragone News</h1>
    <div className="grid lg:grid-cols-2 gap-5 ">
        {
            data.map(singleData=> <ShowData newsData={singleData}></ShowData>)
        }
    </div>
   </div>
  );
};

export default DisplayNews;
