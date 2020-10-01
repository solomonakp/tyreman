import React from 'react';
import { LogoLightThree } from '../svgs';
import theme from '../theme';

export default function ContactAddress() {
  return (
    <div className='col-md-4'>
      <p>
        Thankyou for your interest <br /> in our services
      </p>
      {/* svg */}
      <LogoLightThree />
      <p>
        51 Adeyeye St, MCC <br /> Estate Gbagada,Lagos
      </p>
      <p>
        Mon-Fri: 08:00 - 05:00 <br />
        Weekend: 10:00 - 05:00
      </p>
      <p>081 2222 222</p>
      <style jsx>{`
        p {
          font-size: 18px;
          line-height: 36px;
          margin-bottom: 10px;
          color: ${theme.colors.paragraphColor};
          &:nth-of-type(2) {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
