import React from 'react';
import { TopArc } from '../../components/svgs';
import MainSlider from './MainSlider';

export default function Banner(props) {
  return (
    <div className='banner container-fluid position-relative'>
      {/* svg background */}
      <TopArc />
      <div className='container-xl slide-container'>
        {/* slider */}
        <MainSlider />
      </div>

      <style jsx>{`
        .banner {
          padding-top: 80px;
          padding-bottom: 150px;
          @media (max-width: 991.98px) {
            padding-bottom: 100px;
          }
          @media (max-width: 767.98px) {
            padding-top: 100px;
          }
        }
      `}</style>
    </div>
  );
}
