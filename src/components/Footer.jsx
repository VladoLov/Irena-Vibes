import { socialLinks, otherLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import OtherLinks from "./OtherLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <div className="contact-center">
        <div className="gird-left">
          <h4 className="footer-information">Contact Us:</h4>
          <p>
            {/* Click{" "} */}
            <a
              href="https://www.google.com/maps?q=43.350764, 17.807767"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr.Mile Budaka 97 Mostar, Bosnia and Herzegovina
            </a>
            {/*{" "} */}
          </p>
          <p>
            <a href="tel:+38761390879">+38761390879</a>{" "}
          </p>
          <p>
            <a href="mailto:lovric.v@hotmail.com">irenalovric@example.com</a>
          </p>

          <ul className="footer-icons">
            {socialLinks.map((link) => {
              return (
                <SocialLink key={link.id} {...link} itemClass="footer-icon" />
              );
            })}
          </ul>
        </div>
        <div className="gird-center">
          {/* Google Map Location */}
          <div className="google-map">
            {/* Integrate Google Maps API here */}
            {/* Example: */}
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.2579161028993!2d17.805211176840594!3d43.350715371941156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b43a1d26e7d99%3A0x2649f53d9391c70f!2sDr.%20Mile%20Budaka%2097%2C%20Mostar%2088000!5e0!3m2!1shr!2sba!4v1707315201331!5m2!1shr!2sba"
              // width="600"
              // height="450"
              // style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Additional Footer Icons */}
        <div className="gird-right">
          <h4>Visit us in Cavtat</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=42.57747793806969, 18.222046287495345"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stjepana Radića 4C,20210 Cavtat, Croatia
            </a>
          </p>
          <p>
            <a href="tel:+385993771871">+385993771871</a>{" "}
          </p>
          <p>
            <a href="mailto:lovric_boris@hotmail.com">
              lovric_boris@hotmail.com
            </a>
          </p>
          <ul className="footer-icons">
            {otherLinks.map((link) => {
              return (
                <OtherLinks key={link.id} {...link} itemClass="footer-icon" />
              );
            })}
          </ul>
        </div>
      </div>

      <p className="copyright">
        copyright &copy;
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
