import React from 'react';
import theme from '../theme';
import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
  return (
    <section className='testimonial-section'>
      <div className='container-xl text-center'>
        <h2 className='heading'>Testimonials</h2>
        <p className='section-paragraph'>What people are saying</p>
        <TestimonialSlider />
      </div>
      <style jsx>{`
        .heading,
        .how-card,
        .section-paragraph,
        .card-heading,
        .card-paragraph {
          text-align: center;
        }
        .testimonial-section {
          margin-bottom: 50px;
        }
        .section-paragraph,
        .card-paragraph {
          font-family: ${theme.fontFamily.circularBook};
        }
        .heading {
          font-weight: 900;
          line-height: 56px;
          color: ${theme.colors.primary};
          font-size: ${theme.size.heading};
          margin-bottom: 20px;
        }
        .section-paragraph {
          font-size: ${theme.size.paragraph};
          line-height: 36px;
          margin-bottom: 40px;
        }
        .card-heading {
          color: ${theme.colors.primary};
          font-size: 24px;
          line-height: 30px;
          margin: 15px 0 20px 0;
        }
        .card-paragraph {
          line-height: 36px;
          max-width: 300px;
          width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}
