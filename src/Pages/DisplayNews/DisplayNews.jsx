import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import ShowData from "../ShowData/ShowData";

const DisplayNews = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
   <div>
    <h1 className="text-5xl font-semibold text-black">Dragone News</h1>
    <p className="mt-4">{data.length} : News Show</p>
    <div className="flex flex-col gap-12">
        {
            data.map(singleData=> <ShowData newsData={singleData}></ShowData>)
        }
    </div>
   </div>
  );
};

export default DisplayNews;
