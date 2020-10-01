import React from 'react';
import { Button } from '../inputComponents';
import theme from '../theme';
import { SideArcYellow } from '../svgs';
// img
import tyreFlag from '../../assets/img/tyreman-flag.png';

export default function Why(props) {
  return (
    <section className='range-section position-relative'>
      <div className='container-xl'>
        <div className='row d-block d-md-flex'>
          {/* svg */}
          <SideArcYellow />
          {/* empty */}
          <div className='d-none d-lg-block col-lg-2'></div>
          <div className='col-12 col-md-6 col-lg-6 order-1'>
            {/* first reason */}
            <div className='section-image'>
              <img
                src={tyreFlag}
                alt='Tyreman flag'
                role='presentation'
                className='position-lg-relative'
              />
            </div>
          </div>
          <div className='col-12 col-md-5 col-lg-3 d-flex align-items-lg-end position-relative position-lg-static'>
            <div className='convenience position-md-absolute position-lg-relative'>
              <h3>
                Largest <br /> range of tyres
                <hr />
              </h3>
              <p>
                We stock more than 70 top brands and over 10 thousand tyres.
              </p>
              <p>
                From premium to mid-range and Economy tyres, you'll find
                everything for your needs.
              </p>
              <div className='button-holder'>
                <Button className='standard-type-2 view-product'>
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h3 {
          color: ${theme.colors.primary};
          font-weight: bold;
        }
        p {
          line-height: 36px;
          color: ${theme.colors.paragraphColor};
        }
        .range-section {
          margin: 70px 0 320px 0;
          @media (max-width: 1200px) {
            margin: 70px 0 100px 0;
          }
        }
        .convenience {
          max-width: 365px;
          bottom: -80px;
          @media (max-width: 1182px) {
            bottom: unset;
          }
          @media (max-width: 991.98px) {
            bottom: 0px;
          }
          @media (max-width: 767.98px) {
            margin-right: auto;
          }
          @media (max-width: 600px) {
            margin-left: auto;
          }
        }
        .convenience h3 {
          font-size: 39px;
          line-height: 56px;
          text-align: left;
          margin-bottom: 30px;
          @media (max-width: 991.98px) {
            font-size: 34px;
          }
          hr {
            width: 75%;
            text-align: left;
            border: ${theme.border.ruler};
            display: inline-block;
          }
        }
        img {
          width: 100%;
          display: inline-block;
          left: -96px;
          bottom: -120px;
          @media (max-width: 767.98px) {
            margin-left: auto;
            display: block;
            max-width: 500px;
          }
          @media (max-width: 600px) {
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
