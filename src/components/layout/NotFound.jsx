import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="notFound">
      <div>
        <h2>Some things went wrong !</h2>
        <h2>Error: 404 </h2>
        <h4>
          <Link to="/">Go Back Home</Link>
        </h4>
      </div>
    </div>
  );
};

export default NotFound;
