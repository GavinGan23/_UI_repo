"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">

        <div className="footer__container normal_con grid_display">
          <div className="footer__data grid_display">
            <div>
              <a href="#" className="footer__logo">
                <img src="/coffee.svg" alt="logo" />
              </a>
              <div className="footer__title">Sign up for our newsletter</div>
            </div>
            <form action="" className="footer__form grid_display">
              <input
                type="email"
                placeholder="Enter e-mail address"
                className="footer__input"
              />
              <button className="button footer__button" type="submit">
                Subscribe <i className="ri-arrow-right-s-line"></i>
              </button>
              <p className="footer__description">
                We Protect Your Data Privacy
               
              </p>
            </form>
          </div>
          <div className="footer__content grid_display">
            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
            <span className="footer__copy">
              &#169; Copyright Gavin. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>


  );
}
