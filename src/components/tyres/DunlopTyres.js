import React from 'react';
import theme from '../theme';

export default function (props) {
  return (
    <section className='dunlop-tyres'>
      <div className='container-xl'>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-lg-10'>
            <h2>Dunlop Tyres</h2>
            <p>
              Dunlop Tyres are a premium tyre manufacturer and are well-known as
              one of the best in the business for producing high-quality and
              long-lasting tyres. Dunlop is owned and operated by Goodyear Tire
              and Rubber Company.Dunlop Tyres’ journey started close to 125
              years ago with the development of the very first pneumatic tyre
              that heralded the era of motor racing. In last century and a
              quarter, Dunlop Tyres has focused solely on innovation and have
              been a driving force behind some of the breakthrough technologies
              seen in tyre development such as the Specific Bead Seat System,
              Multi Radius Tread Technology and DuPont Kevlar compound.
            </p>
          </div>
          <div className='d-none d-lg-block col-lg-1'></div>
        </div>
      </div>
      <style jsx>{`
        section.dunlop-tyres {
          margin-top: 140px;
          margin-bottom: 50px;
          text-align: center;
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
            line-height: 32px;
          }
        }
      `}</style>
    </section>
  );
}
