import React from 'react';
import { Button } from '../inputComponents';
import theme from '../theme';
import { Search, Calendar, Racing } from '../svgs';
export default function How() {
  return (
    <section className='how-section'>
      <div className='container-xl text-center'>
        <h2 className='heading'>How to buy online</h2>
        <p className='section-paragraph'>Your new tyres are 3 steps away</p>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-4 text-center text-sm-right text-lg-center'>
            <div className='how-card'>
              {/* svg */}
              <Search />
              <h3 className='card-heading'>Find Tyres</h3>
              <p className='card-paragraph'>
                We’ll filter through thousands of quality <br />
                and premium tyres and show you <br /> what will fit your vehicle
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-lg-4 text-center text-sm-right text-lg-center mt-3 mt-sm-0'>
            <div className='how-card'>
              {/* svg */}
              <Calendar width='70px' height='70px' />
              <h3 className='card-heading'>Schedule an Appointment</h3>
              <p className='card-paragraph'>
                At checkout, you pick a convenient <br />
                appointment time at one of our <br /> expert installers
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-lg-4 text-center text-sm-center text-lg-center mt-3 mt-lg-0'>
            <div className='how-card'>
              {/* svg */}
              <Racing width='70px' height='70px' />
              <h3 className='card-heading'>We Install</h3>
              <p className='card-paragraph'>
                Simply show up for your appointment,
                <br /> We’ll send the tyres to your
                <br />
                installer
              </p>
            </div>
          </div>
        </div>
        <Button className='standard-type-2'>Find Tyres</Button>
      </div>
      <style jsx>{`
        .heading,
        .how-card,
        .section-paragraph,
        .card-heading,
        .card-paragraph {
          text-align: center;
        }
        .how-section {
          margin-bottom: 50px;
        }
        .how-card {
          display: inline-block;
          width: 100%;
          margin-bottom: 60px;
        }
        .section-paragraph,
        .card-paragraph {
          color: ${theme.colors.paragraphColor};
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
