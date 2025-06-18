import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import RightNavbar from "../Components/RightNavbar/RightNavbar";

const NewsDetails = () => {
  const details = useLoaderData();
  const destructureDetails = details.data[0];
  console.log(destructureDetails);
  return (
    <div>
      <Header></Header>
      <div className="card bg-base-100  mt-12 w-9/12 mx-auto shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={destructureDetails.thumbnail_url}
            alt="Detils"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black font-bold">{destructureDetails.title}</h2>
          <p className="indent-50 text-black">{destructureDetails.details}</p>
          <div className="card-actions">
            <Link to="/" className="btn btn-primary">Go To News</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
