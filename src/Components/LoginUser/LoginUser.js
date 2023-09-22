import React from "react";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import { createUser, wait } from "../Loaders";
import { toast } from "react-toastify";

//assets imports
import ai from "../../assets/ai.jpg";

//import css
import "./loginuser.css";



const LoginUser = () => {
  return (
    <div className="LoginUser sub-container ">
      <div className="login-para-form">
        <h2>Create Your Account, <span className="accent">Buddy</span></h2>
        <p>
          Managing your finances has never been easier with our user-friendly
          Expense Tracker. Sign in now to take control of your expenses and gain
          a clear understanding of your financial well-being.
        </p>{" "}
        <div className="login-form">
          <Form method="post">
            <input
            className="Login-input"
              type="text"
              name="userName"
              placeholder="Enter Your name."
              required
            />
            <input type="hidden" name="_action" value="Login"/>
            <button className="login-btn btn">Create User</button>
          </Form>
        </div>
      </div>

    
    </div>
  );
};

export default LoginUser;
