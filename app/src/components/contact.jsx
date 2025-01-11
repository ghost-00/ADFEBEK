import React from "react";
import "./styles/contact.scss";

const Contact = () => {
  const [formStatus, setStatus] = React.useState("Submit");
  const [greetingStatus, setGreetingStatus] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, subject, email, message } = e.target.elements;
    let details = {
      name: name.value,
      subject: subject.value,
      email: email.value,
      message: message.value,
    };
    let url = "";
    if (process.env.PORT) {
      url = "0.0.0.0:" + process.env.PORT;
    } else {
      //url = "http://localhost:" + 5555;
      url = " https://esf-back-20c2476353e5.herokuapp.com";
    }
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setGreetingStatus("Message envoyé");
    let result = await response.json();
    //alert(result.status);
    details = {};
  };
  return (
    <div id="contact" class="contact-us break-white-bg">
      <div class="black-text quote">
        <span>
          <i class="fa fa-quote-left"></i>
        </span>
        N’hésitez pas à nous contacter pour toute demande d’informations
        <span>
          <i class="fa fa-quote-right"></i>
        </span>
      </div>
      <div id="contact-form">
        <center>
          <p>{greetingStatus}</p>
        </center>
        <form onSubmit={onSubmit}>
          <fieldset>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Votre email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="subject"
                id="subject"
                placeholder="Votre sujet"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                rows="8"
                cols="40"
                placeholder="Envoyer un message à esf Asbl."
                required
              />
            </div>
            <center>
              <button className="btn message-btn" type="submit">
                {formStatus}
              </button>
            </center>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Contact;
