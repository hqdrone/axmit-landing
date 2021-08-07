import React from 'react';

// @ts-ignore
import logo from 'static/img/last-mile-logo.svg';
// @ts-ignore
import flag from 'static/img/flag-uk.svg';
// @ts-ignore
import angle from 'static/img/expand-vert.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container container_full">
        <div className="header__flex">
          <div className="header__logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="header__lang header-lang">
            <div className="header-lang__value">
              <img src={flag} alt="" />
            </div>
            <div className="header-lang__arrow">
              <img src={angle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
