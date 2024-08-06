import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { formValidation } from "../Utils/FormValidation";

const Login = () => {
  const [islogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(null);
  const Password = useRef(null);
  const Email = useRef(null);
  const Name = useRef(null);
  const handlelogin = (e) => {
    setIsLogin(!islogin);
  };
  const handleSubmit = () => {
    console.log(Email.current.value);
    const error = formValidation(
      Name?.current?.value,
      Email?.current?.value,
      Password?.current?.value
    );
    setIsError(error);
  };
  return (
    <>
      <div className="">
        <Header />
        <div className="bg-gradient-to-b from-black absolute">
          <Link to="/" className="cursor-pointer">
            <img
              className="cursor-pointer"
              src="https://wallpapercave.com/wp/wp1917134.jpg"
              alt="img"
            />
          </Link>
        </div>

        <form className="absolute bg-black w-4/12 h-auto my-32 mx-auto left-0 right-0 px-16 pb-16 rounded-2xl text-slate-100 text-xl bg-opacity-80">
          <h1 className="font-bold py-5 text-center text-2xl">
            {" "}
            {islogin ? "Sign-In" : "SignUp"}
          </h1>
          {!islogin && (
            <input
              className="px-5 py-5 mx-5 my-5 w-11/12 rounded-xl bg-gray-700"
              type="text "
              placeholder="Name"
              ref={Name}
            />
          )}
          <input
            className="px-5 py-5 mx-5 my-5 w-11/12 rounded-xl bg-gray-700"
            type="email"
            placeholder="Email"
            ref={Email}
          />
          <input
            className="px-5 py-5 mx-5 my-5 w-11/12 rounded-xl bg-gray-700"
            type="password "
            placeholder="Password"
            ref={Password}
          />
          <p className="text-center text-red-600 font-bold">{isError}</p>
          <button
            type="button"
            className="px-5 py-5 mx-5 my-5 w-11/12 rounded-xl text-white bg-red-700"
            onClick={handleSubmit}
          >
            {islogin ? "Sign-In" : "SignUp"}
          </button>
          <div className="text-white mx-6 justify-evenly flex">
            {islogin ? "New to netflix" : "Already have Account"}
            <button
              type="button"
              className="px-1 py-1 w-24 rounded-lg text-white border-red-700 border hover:bg-red-700"
              onClick={handlelogin}
            >
              {islogin ? "SignUp" : "SignIn"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
