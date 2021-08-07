import React from 'react';

import DeliveryCard from './DeliveryCard';

const Delivery: React.FC = () => {
  return (
    <section className="delivery">
      <div className="container">
        <h2 className="delivery__h2 h2">HOW WE DELIVER</h2>
        <div className="delivery__cards">
          <DeliveryCard
            deliverCardImg="https:/picsum.photos/640/480"
            deliverCardTitle="Step 1"
            deliverCardText="Porttitor blandit augue nunc ut at mattis"
          />
          <DeliveryCard
            deliverCardImg="https:/picsum.photos/640/481"
            deliverCardTitle="Step 2"
            deliverCardText="Porttitor blandit augue nunc"
          />
          <DeliveryCard
            deliverCardImg="https:/picsum.photos/640/482"
            deliverCardTitle="Step 3"
            deliverCardText="Porttitor blandit augue"
          />
        </div>
      </div>
    </section>
  );
};

export default Delivery;
