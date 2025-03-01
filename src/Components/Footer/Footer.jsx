import { useState } from "react";

function Footer() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setMessage("Please Enter a Valid Email Address");
      return;
    } else {
      setMessage("Thank You For Subscribing!!");
      setEmail("");
    }
  };

  return (
    <>
      <section className="container pro d-flex justify-content-evenly p-4">
        {/* Left Part - Social Media Links */}
        <div className="left-part">
          <h2>Follow Us</h2>
          <ul className="social-links d-flex gap-3 ">
            <li>
              <a
                href="https://www.instagram.com/orahcandles?igsh=YzV0ODAwajQ4cWJm"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61572469680600"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/917082751659" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:harshitawadhwa@orahcandles.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope-check"></i>
              </a>
            </li>
          </ul>

          <div className="newsletter mt-4">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Get the latest updates and offers.</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-dark" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
            {message && <p className="mt-2">{message}</p>}
          </div>
        </div>

        {/* Right Part - Navigation Links */}
        <div className="right-part ">
          <h2>Quick Links</h2>
          <ul className="footer-links d-flex flex-column">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
