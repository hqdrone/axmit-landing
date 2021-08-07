import React from 'react';

// @ts-ignore
const TeamCard: React.FC = ({ teamCardImg, teamCardName, teamCardText }) => {
  return (
    <div className="team__card team-card">
      <div className="team-card__image">
        <img src={teamCardImg} alt="" />
      </div>
      <div className="team-card__name">{teamCardName}</div>
      <div className="team-card__text">{teamCardText}</div>
    </div>
  );
};

export default TeamCard;
