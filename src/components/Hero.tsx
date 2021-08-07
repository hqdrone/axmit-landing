import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__body">
          <div className="hero__title">On-demand delivery from your favorite local stores</div>
          <div className="hero__search hero-search">
            <form>
              <div className="hero-search__flex">
                <div className="hero-search__input">
                  <input placeholder="Lohmühlenstrasse 65, 12435" />
                </div>
                <div className="hero-search__button">
                  <button>Find stores</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
