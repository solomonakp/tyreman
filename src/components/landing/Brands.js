import React from 'react';
import theme from '../theme';

// logos
import bridgeStone from '../../assets/img/Bridgestone.png';
import dunlop from '../../assets/img/dunlop.png';
import eternity from '../../assets/img/ETERNITY.png';
import gtRadial from '../../assets/img/gtradial.png';
import infinity from '../../assets/img/infinity.png';
import maxxis from '../../assets/img/maxxis.png';
import michelin from '../../assets/img/Michelin.png';

function Brands(props) {
  const brandsLogo = [
    {
      img: bridgeStone,
      alt: 'bridge stone logo',
    },
    {
      img: dunlop,
      alt: 'dunlop logo',
    },
    {
      img: eternity,
      alt: 'eternity logo',
    },
    {
      img: gtRadial,
      alt: 'gt radial logo',
    },
    {
      img: infinity,
      alt: 'infinity logo',
    },
    {
      img: maxxis,
      alt: 'maxxis logo',
    },
    {
      img: michelin,
      alt: 'michelin logo',
    },
  ];
  return (
    <section className='brands-section'>
      <h3>Our Brands</h3>
      <div className='container-fluid'>
        <div className='container-xl'>
          <div className='brands-container d-flex flex-wrap w-100 justify-content-center '>
            {brandsLogo.map((logo, index) => {
              return <img src={logo.img} alt={logo.alt} key={index + 'logo'} />;
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .brands-section {
          margin-top: 50px;
          margin-bottom: 40px;
        }
        .container-fluid {
          border-top: ${theme.border.brands};
          border-bottom: ${theme.border.brands};
        }

        h3 {
          text-align: center;
          font-weight: 900;
          line-height: 56px;
          color: ${theme.colors.primary};
          font-size: ${theme.size.heading};
          margin-bottom: 30px;
        }
        img {
          width: 100%;
          height: auto;
          max-width: 150px;
          display: inline-block;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}

export default Brands;
