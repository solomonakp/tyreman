import React from 'react';
import theme from '../theme';
import tyreGroup from '../../assets/img/tyregroup.jpg';
import { Bills } from '../svgs';

export default function TyreCategory() {
  return (
    <section className='tyre-category'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-3 text-center text-sm-right text-lg-center'>
            <button className='category'>
              <h3 className='category-name'>
                BUDGET
                <br />
                TYRES
              </h3>
              <span className='link'>SHOP NOW</span>
            </button>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mt-3 mt-sm-0 text-center text-sm-left text-lg-center'>
            <button className='category'>
              <h3 className='category-name'>
                MID RANGE
                <br />
                TYRES
              </h3>
              <span className='link'>SHOP NOW</span>
            </button>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 text-center text-sm-right text-lg-center'>
            <button className='category'>
              <h3 className='category-name'>
                PREMIUM
                <br />
                TYRES
              </h3>
              <span className='link'>SHOP NOW</span>
            </button>
          </div>
          <div className='col-12 col-sm-6 col-lg-3 mt-3 mt-lg-0 text-center text-sm-left text-lg-center'>
            <button className='category quote'>
              {/* svg */}
              <Bills />
              <h3 className='category-name'>
                Get a
                <br />
                Quote
              </h3>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tyre-category {
            margin: 100px 0;
            border-radius: 3px;
          }
          .category {
            display: inline-block;
            width: 100%;
            padding: 30px 0 0 0;
            position: relative;
            overflow: hidden;
            max-width: 265px;
            height: 184px;
            transition: ${theme.effects.allIn(300)};
            &:active {
              transform: ${theme.effects.stretch};
            }
          }
          .category:not(.quote) {
            background-image: url(${tyreGroup});
            background-size: cover;
            background-repeat: no-repeat;
            background-origin: border-box;
          }
          button.quote {
            background-color: ${theme.colors.secondary};
          }
          .category-name {
            text-align: center;
            line-height: 30px;
            white-space: nowrap;
            color: ${theme.colors.primary};
            font-weight: 900;
          }
          .category-name {
            margin-bottom: 70px;
          }
          button.quote .category-name {
            margin: 12px 0;
          }
          .link {
            color: ${theme.colors.secondary};
            padding: 10px 0;
            text-align: center;
            display: inline-block;
            width: 100%;
            background-color: ${theme.colors.primary};
            border: 2px solid ${theme.colors.primary};
            border-radius: 3px;
            font-size: 14px;
            white-space: nowrap;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `}
      </style>
    </section>
  );
}
