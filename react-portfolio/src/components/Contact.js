import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <div className="container inputs">
        <form>
          <label>
            {" "}
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            {" "}
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            {" "}
            Message:
            <input type="text" name="message" />
          </label>
          <button
            type="submit"
            name="submitButton"
            type="submit"
            className="btn-success btn-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
