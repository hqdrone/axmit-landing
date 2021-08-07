import React from 'react';

const DeliveryCard: React.FC = ({ deliverCardImg, deliverCardTitle, deliverCardText }) => {
  return (
    <div className="delivery__card delivery-card">
      <div className="delivery-card__image">
        <img src={deliverCardImg} alt="" />
      </div>
      <div className="delivery-card__title">{deliverCardTitle}</div>
      <div className="delivery-card__text">{deliverCardText}</div>
    </div>
  );
};

export default DeliveryCard;
