import React from 'react';
import theme from '../theme';

export default function Welcome(props) {
  return (
    <section className='welcome'>
      <div className='container-xl'>
        <h2>Welcome to Tyreman</h2>
        <p className='main-paragraph mx-auto'>
          Your online tyre specialist based and operating in Nigeria. we offer a
          wide range of new tyres for every vehicle at the best prices, and ship
          at zero cost to customers within Lagos
        </p>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-sm-6 col-lg-5'>
            <p className='mb-4 mb-sm-0 mx-auto mx-sm-0'>
              We aspire to make buying and replacing tyres easy, transparent and
              affordable. We operate our entire business online, incurring lower
              logistical costs, ultimately leading to lesser financial
              overheads.{' '}
            </p>
          </div>
          <div className='col-12 col-sm-6 col-lg-5'>
            <p className='mx-auto mx-sm-0'>
              Our customers enjoy the best possible prices thanks to a low-cost,
              high-volume business model. Tyreman.ng uses data and technology to
              aggregate tyre inventory, for every type of vehicle, from
              suppliers across the country.
            </p>
          </div>

          <div className='d-none d-lg-block col-lg-1'></div>
        </div>
      </div>
      <style jsx>{`
        section.welcome {
          margin-top: 70px;
          margin-bottom: 50px;
          h2,
          .main-paragraph {
            text-align: center;
          }
          h2 {
            font-weight: bold;
            color: ${theme.colors.primary};
          }
          .main-paragraph {
            max-width: 700px;
          }
          .row {
            margin-top: 40px;
          }
          p {
            color: ${theme.colors.paragraphColor};
            font-size: 16px;
          }
          .row p {
            max-width: 426px;
          }
        }
      `}</style>
    </section>
  );
}
