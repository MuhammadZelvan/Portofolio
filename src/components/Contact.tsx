import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Kontak</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:zenmuhammad900@mail.com" data-cursor="disable">
                zenmuhammad900@mail.com
              </a>
            </p>
            <h4>Telepon</h4>
            <p>
              <a href="tel:+6285975253722" data-cursor="disable">
                +62 859 7525 3722
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Media sosial</h4>
            <a
              href="https://github.com/MuhammadZelvan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadzelvan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/znzfrr__/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Didesain & dikembangkan <br /> oleh <span>Muhammad Zelvan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
