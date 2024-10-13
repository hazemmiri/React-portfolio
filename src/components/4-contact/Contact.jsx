import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1728275524149.json";
import contactAnimation from "../../animation/contact.json";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanywdep");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelop"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us fro more information and Get notified
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className=" ">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px " }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting ..." : " Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Thanks you message has been sent successfully !
            </p>
          )}
        </form>
        <div className=" animtion">
          <Lottie
            className="contact-animation"
            style={{ height: 400 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
