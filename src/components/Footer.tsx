import React from 'react';

import FooterSocials from './FooterSocials';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container container_full">
        <div className="footer__flex">
          <div className="footer__left">
            <FooterSocials />
            <div className="footer__nav footer-nav">
              <ul>
                <li>
                  <a href="">Carrers</a>
                </li>
                <li>
                  <a href="">Terms of use</a>
                </li>
                <li>
                  <a href="">Impressum</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright footer-copyright">© 2021 LastMile</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
