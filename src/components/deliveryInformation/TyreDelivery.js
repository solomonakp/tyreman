import React from 'react';
import theme from '../theme';

export default function (props) {
  return (
    <section className='tyre-delivery'>
      <div className='container-xl'>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-lg-10'>
            <h2>Your Tyre Delivery</h2>
            <p>
              Tyreman endeavours to get your tyre order to you as fast as
              possible and for an affordable rate. Tyreman covers the delivery
              cost for orders within Lagos, if there is a delivery charge, it is
              calculated from the location of the stock to the state you have
              entered.
            </p>
            <p>
              Delivery times arrive to most states in about 3 days, if the
              delivery location is a little further, when proceeding through the
              checkout, we will state a more accurate estimate on delivery.
            </p>
          </div>
          <div className='d-none d-lg-block col-lg-1'></div>
        </div>
      </div>
      <style jsx>{`
        section.tyre-delivery {
          margin-top: 70px;
          margin-bottom: 50px;
          text-align: left;
          .row {
            margin-top: 40px;
          }
          h2 {
            font-weight: bold;
            color: ${theme.colors.primary};
            margin-bottom: 35px;
          }
          p {
            color: ${theme.colors.paragraphColor};
            font-size: 16px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
}
