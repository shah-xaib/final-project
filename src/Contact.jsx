import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        “I’d love to connect — whether it’s designing your perfect pant coat, partnering on a luxury project, or sharing the art of fine dressing.”
      </p>

      <div className="contact-content">
        
        <div className="contact-form">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="form-input"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <p>
              <LocationOnIcon className="icon" /> Lahore, Pakistan
            </p>
            <p>
              <EmailIcon className="icon" /> shahxaibmughal989@gmail.com
            </p>
            <p>
              <PhoneIcon className="icon" /> +92 312 4719598
            </p>
          </div>
        </div>

        
        <div className="contact-map">
          <iframe
          title="Three Star Tailor Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.9276446572935!2d74.27264317470039!3d31.60844234278707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d91bc025b0b%3A0x862bc5493225812a!2sThree%20star%20tailor!5e0!3m2!1sen!2s!4v1761329114284!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </div>
  );
}
