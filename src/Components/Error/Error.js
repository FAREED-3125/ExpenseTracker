import React from "react";
import { useNavigate, useRouteError,NavLink, useLocation } from "react-router-dom";

// css import 
import './error.css'

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
 
 
  return (
    <div className="Error-element ">
      <h2>Opps,Something Wrong</h2>
      {error && <p>{error.message}</p>}
      <br />
      <div className="Error-btns">
        <button className="btn go-back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <NavLink to="/" className="btn go-home">Go Home</NavLink>
      </div>
    </div>
  );
};

export default Error;
