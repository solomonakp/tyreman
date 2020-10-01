import React from 'react';
import { Button } from '../inputComponents';
import theme from '../theme';
import { SideArcBlue } from '../svgs';
// img
import tyreStacks from '../../assets/img/tyrestacks.png';

export default function Why(props) {
  return (
    <section className='why-section position-relative'>
      <div className='container-xl'>
        <div className='row d-block d-md-flex'>
          {/* svg */}
          <SideArcBlue />
          {/* empty */}
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-md-6 col-lg-5'>
            {/* first reason */}
            <div className='why-buy'>
              <h3>
                Why buy
                <br /> from us ?
              </h3>
              <img src={tyreStacks} alt='stack of tyres' role='presentation' />
            </div>
          </div>
          {/* empty */}
          <div className='d-none d-md-block col-md-1'></div>
          <div className='col-12 col-md-5 col-lg-4  d-flex align-items-lg-end position-relative position-lg-static'>
            <div className='convenience position-md-absolute position-lg-relative'>
              <h3>
                Your top-notch <br /> convenience
              </h3>
              <p>
                We want to make the buying and installation process hassle-free
                and simple with more than 500+ fitting stations Nation-wide
              </p>
              <p>
                We help you regarding any question from tread depth to tyre
                pattern
              </p>
              <div className='button-holder d-flex flex-column flex-lg-row'>
                <Button
                  className='standard-type-2 view-product'
                  rippleClass='mr-lg-3 mb-3 mb-lg-0 view-ripples'
                >
                  View Products
                </Button>
                <Button className='text-button questions'>
                  Questions? Talk to our team
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
        .why-section {
          margin: 70px 0 200px 0;
          @media (max-width: 1200px) {
            margin: 70px 0 100px 0;
          }
        }
        .why-buy h3 {
          font-size: 55px;
          line-height: 70px;
          text-align: right;
          position: relative;
          top: 80px;
          @media (max-width: 1182px) {
            top: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 45px;
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
            margin-left: auto;
          }
          @media (max-width: 600px) {
            margin-right: auto;
          }
        }
        .convenience h3 {
          font-size: 44px;
          line-height: 56px;
          text-align: left;
          margin-bottom: 30px;
          @media (max-width: 991.98px) {
            font-size: 34px;
          }
        }
        img {
          width: 100%;
          display: inline-block;
          max-width: 445px;
          @media (max-width: 767.98px) {
            margin-left: auto;
            display: block;
          }
          @media (max-width: 600px) {
            margin-right: auto;
          }
        }
        :global(.view-ripples) {
          max-width: 132px;
        }
      `}</style>
    </section>
  );
}
