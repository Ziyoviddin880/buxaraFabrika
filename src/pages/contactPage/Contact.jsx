import { useRef } from "react";
import "./contact.scss";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const submit = (e) => {
    e.preventDefault();
    form.current.reset();
    toast.success("Success");
  };

  return (
    <div data-aos="fade-down" className="contactPage">
      <div className="left-side">
        <h1 className="title">Contact</h1>

        <form ref={form} onSubmit={submit}>
          <input required type="email" placeholder="Your email address" />
          <input required type="tel" placeholder="Your phone number" />
          <textarea
            rows="10"
            placeholder="write if you have a message"
          ></textarea>
          <button>Sending</button>
        </form>
      </div>
      <div className="right-side">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.6596176245753!2d64.45683157544842!3d39.74729619611218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005f5da092a35%3A0x38ddf0b8d382281b!2z0J7QntCeIEJ1a2hhcmEgTmF0dXJhbCBQcm9kdWN0!5e0!3m2!1sru!2s!4v1730539151465!5m2!1sru!2s"
          // width="600"
          // height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
