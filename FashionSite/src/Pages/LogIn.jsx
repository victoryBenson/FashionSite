import React, { useState } from "react";
import BackgroundImg from "../../src/assets/login.jpg";
import google from "../../src/assets/google.png";
import facebook from "../../src/assets/facebook.png";
import apple from "../../src/assets/apple.png";
import microsoft from "../../src/assets/microsoft.png";

import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export const LogIn = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="w-full h-[100vh]">
        <div
          style={{ backgroundImage: `url(${BackgroundImg})` }}
          className=" w-full h-[100vh] fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center"
        >
          {
            <div class={`container ${isActive ? "active" : ""}`}>
              <div class="form-container sign-up">
                <form action="form">
                  <h1>Create Account</h1>
                  <div class="social-icons">
                    <a href="">
                      <img src={apple} alt="" />
                    </a>
                    <a href="">
                      <img src={google} alt="" />
                    </a>
                    <a href="">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="">
                      <img src={microsoft} alt="" />
                    </a>
                  </div>
                  <span>or use your email for registration</span>

                  <input type="text" placeholder="Name" class="inputed" />
                  <input type="email" placeholder="Email" className="inputed" />
                  <label className="password">
                    <input
                      class="input"
                      type={open === false ? "password" : "text"}
                      placeholder="Password"
                    />
                    <div className="eye-icons">
                      {open === false ? (
                        <FaRegEye onClick={toggle} />
                      ) : (
                        <FaRegEyeSlash onClick={toggle} />
                      )}
                    </div>
                  </label>
                  <button>Sign UP</button>
                </form>
              </div>

              {/* sign inn */}

              <div class="form-container sign-in">
                <form action="form">
                  <h1>Sign In</h1>
                  <div class="social-icons">
                    <a href="">
                      <img src={apple} alt="" />
                    </a>
                    <a href="">
                      <img src={google} alt="" />
                    </a>
                    <a href="">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="">
                      <img src={microsoft} alt="" />
                    </a>
                  </div>
                  <span>or use your email password</span>

                  <input type="email" placeholder="Email" class="inputed" />
                  <label className="password">
                    <input
                      class="input"
                      type={open === false ? "password" : "text"}
                      placeholder="Password"
                    />
                    <div className="eye-icons">
                      {open === false ? (
                        <FaRegEye onClick={toggle} />
                      ) : (
                        <FaRegEyeSlash onClick={toggle} />
                      )}
                    </div>
                  </label>
                  <a href="#">Forgot your password</a>
                  <button>Sign in</button>
                </form>
              </div>

              {/* toggle container */}

              <div class="toggle-container">
                <div class="toggle">
                  <div class="toggle-panel toggle-left ">
                    <h1>Welcome back</h1>
                    <p>
                      Enter your personal details to use all of the site
                      features
                    </p>
                    <button
                      class="hide"
                      id="login"
                      onClick={() => handleClick()}
                    >
                      Sign In
                    </button>
                  </div>
                  <div class="toggle-panel toggle-right">
                    <h1>Hello Friend!</h1>
                    <p>
                      Register with your personal details to use all of the site
                      features
                    </p>
                    <button
                      class="hide"
                      id="register"
                      onClick={() => handleClick()}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
