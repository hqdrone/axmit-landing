import React from 'react';

import TeamCard from './TeamCard';

// @ts-ignore
import img1 from 'static/img/1.png';
// @ts-ignore
import img2 from 'static/img/2.png';
// @ts-ignore
import img3 from 'static/img/3.png';
// @ts-ignore
import img4 from 'static/img/4.png';
// @ts-ignore
import img5 from 'static/img/5.png';
// @ts-ignore
import img6 from 'static/img/6.png';

const Team: React.FC = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="team__h2 h2">TEAM</h2>
        <div className="team__cards">
          <TeamCard teamCardImg={img1} teamCardName="Robert Fox" teamCardText="Porttitor blandit augue nunc ut at mattis" />
          <TeamCard teamCardImg={img2} teamCardName="Esther Howard" teamCardText="Porttitor blandit augue nunc" />
          <TeamCard teamCardImg={img3} teamCardName="Leslie Alexander" teamCardText="Porttitor blandit augue nunc ut at mattis" />
          <TeamCard teamCardImg={img4} teamCardName="Darlene Robertson" teamCardText="Porttitor blandit augue nunc ut" />
          <TeamCard teamCardImg={img5} teamCardName="Kathryn Murphy" teamCardText="Porttitor blandit augue nunc ut at mattis" />
          <TeamCard teamCardImg={img6} teamCardName="Jerome Bell" teamCardText="Porttitor blandit augue" />
        </div>
      </div>
    </section>
  );
};

export default Team;
