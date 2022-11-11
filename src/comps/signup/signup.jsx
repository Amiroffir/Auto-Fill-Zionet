import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";

const collection = document.getElementsByTagName("input");

export const Signup = ({ getDetails, js }) => {
  const handleSubmit = () => {
    //console.log(js);
    return js;
  };
  return (
    <div className="userD">
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
          }}
        >
          Submit
        </button>
      </form>
      <div>
        <a href={handleSubmit()}>I'm your bookmark</a>
      </div>
    </div>
  );
};

// javascript: (function () {
//   collection = document.getElementsByTagName("input");
//   collection[0].value = "AAA";
//   collection[0].style.backgroundColor = "lightgreen";
//   collection[1].value = "aaa@gmail.com";
//   collection[1].style.backgroundColor = "lightgreen";
//   collection[2].value = "0524269629";
//   collection[2].style.backgroundColor = "lightgreen";
//   collection[3].style.backgroundColor = "red";
//   collection[4].value = "Haim/Elias";
//   collection[4].style.backgroundColor = "lightgreen";
//   collection[5].checked = true;
//   collection[7].style.backgroundColor = "red";
//   collection[3].onkeypress = () => {
//     collection[3].style.backgroundColor = "lightgreen";
//   };
//   collection[7].onkeypress = () => {
//     collection[7].style.backgroundColor = "lightgreen";
//   };
// })();
