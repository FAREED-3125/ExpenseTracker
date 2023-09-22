import React from "react";

// toastify library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//css import 
import './home.css'

// image imports 
import wave from '../../assets/Rectangle 4@2x.jpg'

// react-router-dom imports
import { Outlet, useLoaderData,redirect } from "react-router-dom";
import { DeleteUser, fetchUser } from "../../Components/Loaders";
import Navbar from "../../Components/Navbar/Navbar";

export function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener('scroll',reveal)


//Fetch loader Function
export const LoaderMain = () => {
  const userName = fetchUser("userName");

  return userName
};


//Logout Form action function
export const LogoutActions = async () => {
DeleteUser("userName")
  DeleteUser("Budgets")
  DeleteUser("Expense")

  return redirect("/");
};
const HomeLayout = () => {
  const  userName  = useLoaderData();
  return (
    <>
      <nav className="HomeLayout-Header container">
     <Navbar userName={userName}/>
     </nav>
      <main className="HomeLayout-Main container">
        <Outlet></Outlet>
        <ToastContainer />
      </main>

      <footer className="">
        <div className="footer-para container">
        <p>Copyright &copy; Home Budget app</p>
        </div>
      </footer>
    </>
  );
};

export default HomeLayout;
