import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import { useState } from "react";

const collection = document.getElementsByTagName("input");

export const Signup = ({ getDetails, js }) => {
  const [show, setShow] = useState("hidden");
  const handleSubmit = () => {
    return js;
  };
  const handleVisibility = () => {
    setShow("visible");
  };
  return (
    <div className="userD">
      <img
        src="https://cdn-icons-gif.flaticon.com/6172/6172541.gif"
        width={60}
        height={60}
      ></img>
      <div className="container">
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" id="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              getDetails(
                collection[0].value,
                collection[1].value,
                collection[2].value
              );
              handleVisibility();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={show}>
        <div className="centeredA">
          <a className="bookmark" href={handleSubmit()}>
            I'm your bookmark
          </a>
        </div>
      </div>
    </div>
  );
};
