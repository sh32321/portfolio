import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./_contact.scss";

const Contact = () => {
  const [success, setSuccess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z1cg3q",
        "template_h6j64pq",
        form.current,
        "user_Isxg76G37UCKYRcPyZT4A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    setSuccess(
      "I have already received your message and will reply to you soon!"
    );
  };

  return (
    <div className="form-container" id="contact">
      <form onSubmit={sendEmail} ref={form}>
        <div className="line"></div>
        <p className="contact-title">Contact me</p>
        <div className="line"></div>
        <p className="drop-line">
          Drop me in line if you would like to work with me
        </p>
        <p className="email">📩 sh32321@gmail.com</p>
        {success ? (
          <p className="success">{success}</p>
        ) : (
          <p className="drop-line">Or send me the email from here :)</p>
        )}

        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <textarea name="message" cols="30" rows="10" required></textarea>
        </label>
        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
