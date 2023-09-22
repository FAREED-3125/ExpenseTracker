import React from "react";

import { Form } from "react-router-dom";

//icons imports 
import {BsTrash} from 'react-icons/bs'

//css imports
import "./navbar.css";

const Navbar = ({ userName }) => {
  return (
    <>
      <div className="navbar container">
        <div className="sub-container">
          <div className="Home-Username">HomeBudget</div>
          {userName && (
            <div className="Home-LogoutForm">
              <Form
                action="/logout"
                method="post"
                onSubmit={(event) => {
                  // eslint-disable-next-line
                  if (!confirm("Logout confirmation ..")) {
                    event.preventDefault();
                  }
                  //eslint-disable-line
                }}
              >
                <button className="btn btn-logout"><span>Logout</span> <span><BsTrash/></span></button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
