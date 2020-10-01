import React from 'react';
import theme from '../theme';

export default function contactBanner() {
  return (
    <section className='banner'>
      <div className='container-xl h-100 d-flex justify-content-center align-items-center'>
        <h2>Contact Us</h2>
      </div>

      <style jsx>
        {`
          .banner {
            background-color: ${theme.colors.primary};
            height: 350px;
          }

          h2 {
            font-size: 48px;
            line-height: 60.72px;
            color: ${theme.colors.tertiary};
            margin-top: 100px;
          }
        `}
      </style>
    </section>
  );
}
