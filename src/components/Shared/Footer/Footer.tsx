export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <a className="footer__logo" href="#">
            <img src="./img/icons/Logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="footer__center">
          <a href="https://github.com/" className="footer__text">
            github
          </a>
          <a href="mailto:" className="footer__text">
            contacts
          </a>
          <a href="https://github.com/" className="footer__text">
            rights
          </a>
        </div>
        <div className="footer__right">
          <span className="footer__text--right">Back to top</span>
          <button onClick={scrollToTop} className="footer__button"></button>
        </div>
      </div>
    </footer>
  );
};
