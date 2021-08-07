import React from 'react';

// @ts-ignore
import soc1 from 'static/img/social-fb.svg';
// @ts-ignore
import soc2 from 'static/img/social-twitter.svg';
// @ts-ignore
import soc3 from 'static/img/social-instagram.svg';
// @ts-ignore
import soc4 from 'static/img/social-tiktok.svg';

const FooterSocials: React.FC = () => {
  return (
    <div className="footer__socials footer-socials">
      <ul>
        <li>
          <a href="">
            <img src={soc1} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={soc2} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={soc3} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={soc4} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocials;
