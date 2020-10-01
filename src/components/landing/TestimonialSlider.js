import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import theme from '../theme';
import PropTypes from 'prop-types';

// images
import test1 from '../../assets/img/test1.jpg';
import test2 from '../../assets/img/test2.jpg';
import test3 from '../../assets/img/test3.jpg';

console.log(typeof test1);
SwiperCore.use([EffectCoverflow]);
export default () => {
  const SliderCard = ({ name, image, testimony }) => {
    return (
      <div className='card'>
        <div className='image-holder'>
          <img src={image} alt='customers testimony' />
        </div>
        <h6 className='name'>{name}</h6>
        <p className='testimony'>{testimony}</p>

        <style jsx>
          {`
            :global(.testimonial-slider) {
              padding: 20px 0;
            }
            .card {
              border-radius: 3px;
              text-align: center;
              width: 100%;
              max-width: 380px;
              padding: 20px 0 35px 0;
              display: inline-block;
              transition: ${theme.effects.allOut(300)};
              border: 0;
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
            }
            :global(.testimonial-slider .swiper-slide-active .card) {
              transition: ${theme.effects.allIn(300)};
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
            }
            .name,
            .testimony {
              line-height: 36px;
            }
            .name {
              color: ${theme.colors.primary};
              font-weight: 500;
              font-size: 18px;
              margin-bottom: 5px;
            }
            .testimony {
              font-size: 14px;
              line-height: 32px;
              color: ${theme.colors.paragraphColor};
              margin-bottom: 0;
              opacity: 0;
              transition: ${theme.effects.allOut(300)};
            }
            :global(.testimonial-slider .swiper-slide-active .testimony) {
              opacity: 1;
              transition: ${theme.effects.allIn(300)};
            }

            .image-holder {
              max-width: 70px;
              height: 70px;
              text-align: center;
              display: inline-block;
              margin: 0 auto 10px;
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
              object-position: center;
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

  SliderCard.propTypes = {
    name: PropTypes.string.isRequired,
    testimony: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <Swiper
      grabCursor={true}
      effect='coverflow'
      centeredSlides={true}
      initialSlide={1}
      className={'testimonial-slider'}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        620: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 0,
        depth: 400,
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <SliderCard
          name='Sally Ekeada'
          testimony='What people are saying'
          image={test1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          name='Samuel Tanga'
          testimony='Impressive service'
          image={test2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          name='Timothy Eze'
          testimony='straight to the point and fast delivery'
          image={test3}
        />
      </SwiperSlide>
      <style jsx>
        {`
          :global(.testimonial-slider) {
          }
          :global(.skasa) {
          }
        `}
      </style>
    </Swiper>
  );
};
