import React from "react";
import { useState } from "react";
import { SERVER_URL } from "../constants";

// Importing toastify module
import { ToastContainer, toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import "./styles/contact.scss";

function ContactForm(props) {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  const sendMessage = (message) => {
    fetch(SERVER_URL + "contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (response.ok) {
          notifySuccess();
        } else {
          notifyError();
        }
      })
      .catch((err) => console.error(err));
  };

  const notifyError = () => {
    toast.error("Message non envoyé, Verifiez votre email.");
  };
  const notifySuccess = () => {
    toast.success("Message envoyé!");
    setMessage({
      name: "",
      email: "",
      subject: "",
      body: "",
    });
  };
  const handleSubmit = (toast) => {
    sendMessage(message);
  };

  return (
    <div>
      <div id="contact" className="contact-us break-white-bg">
        <div className="black-text quote">
          <span>
            <i className="fa fa-quote-left"></i>
          </span>
          N’hésitez pas à nous contacter pour toute demande d’informations
          <span>
            <i className="fa fa-quote-right"></i>
          </span>
        </div>
        <div id="contact-form">
          <div className="form">
            <fieldset>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                  value={message.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Votre email"
                  value={message.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Votre sujet"
                  value={message.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="8"
                  cols="40"
                  name="body"
                  placeholder="Envoyez votre message à ESF."
                  value={message.body}
                  onChange={handleChange}
                  required
                />
              </div>
              <center>
                <button className="btn message-btn" onClick={handleSubmit}>
                  Envoyer
                </button>
              </center>
            </fieldset>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
