import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectFlip } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// image imports
import tyres from '../../assets/img/tyres.png';
import theme from '../theme';

SwiperCore.use([Pagination, EffectFlip]);
export default () => {
  const SliderContent = () => {
    return (
      <div className='container-lg '>
        <div className='row'>
          <div className='col-lg-2  d-sm-none d-md-block '></div>
          <div className='text-holder col-lg-5 col-sm-7 d-flex flex-nowrap flex-column justify-content-center'>
            <h1 className='heading'>Enjoy a better way to buy tyres online</h1>
            <p className='paragraph'>
              We aspire to make buying and replacing tyres easy, transparent and
              affordable
            </p>
          </div>
          <div className='col-lg-4 col-sm-5 image-holder'>
            <img src={tyres} alt='tyres' className='h-auto' />
          </div>
        </div>
        <style jsx>
          {`
            .heading,
            .paragraph {
              color: ${theme.colors.tertiary};
            }
            .heading {
              font-weight: 500;
              line-height: 61px;
            }
            .paragraph {
              font-size: 18px;
              line-height: 32px;
            }
            img {
              max-width: 100%;
            }
            .image-holder {
              @media (max-width: 575.98px) {
                order: 0;
              }
            }
            .text-holder {
              @media (max-width: 575.98px) {
                order: 3;
              }
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      effect='flip'
      grabCursor={true}
      loop={true}
      className={'main-slider'}
      pagination={{
        clickable: true,
        dynamicBullets: false,
        renderBullet: (index, className) => {
          return (
            '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
          );
        },
      }}
      flipEffect={{
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <style jsx>
        {`
          :global(.main-slider) {
            position: static;
            @media (max-width: 991.98px) {
              min-height: 380px;
            }
            @media (max-width: 575.98px) {
              min-height: 700px;
            }
            @media (max-width: 425px) {
              min-height: 650px;
            }
          }
          :global(div.swiper-pagination-bullets.swiper-pagination) {
            display: flex;
            flex-direction: column;
            width: 100%;
            white-space: nowrap;
            max-width: 268px;
            top: 50%;
            transform: translateY(-50%);
            justify-content: center;
            left: -210px;
            @media (max-width: 991.98px) {
              top: unset;
              transform: translateX(-50%);
              left: 50%;
              flex-direction: row;
              bottom: 0;
            }
          }
          :global(div.swiper-pagination span.swiper-pagination-bullet) {
            border-radius: unset;
            color: ${theme.colors.tertiaryRgbaDark};
            font-size: 24px;
            opacity: 1;
            width: 100%;
            height: unset;
            display: block;
            padding: 15px 0;
            position: relative;
            text-align: right;
            transition: all ease-out 300ms;
            margin: 0 !important;
            background-color: unset;
            @media (max-width: 991.98px) {
              text-align: center;
            }
          }
          :global(span.swiper-pagination-bullet.swiper-pagination-bullet-active) {
            background-color: unset;
            color: ${theme.colors.tertiaryRgba};
            transition: all ease-in 300ms;
            @media (max-width: 991.98px) {
            }
          }
          :global(span.swiper-pagination-bullet::before) {
            content: '';
            border-radius: unset;
            opacity: 0.2;
            width: 100%;
            height: 1.5px;
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            transition: all ease-out 300ms;
            background-color: ${theme.colors.tertiary};
            border-radius: 2px;
            transform: scaleX(0.12);
            transform-origin: right;
            perspective: 1200px;
            @media (max-width: 991.98px) {
              transform: scaleX(0);
            }
          }
          :global(span.swiper-pagination-bullet.swiper-pagination-bullet-active::before) {
            transition: all ease-in 300ms;
            opacity: 1;
            transform: scaleX(1);
            @media (max-width: 991.98px) {
            }
          }
        `}
      </style>
    </Swiper>
  );
};
