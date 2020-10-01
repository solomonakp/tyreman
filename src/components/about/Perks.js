import React from 'react';
import { Present, LightBulb, CarLift, Buy } from '../svgs';
import SeventyThirty from '../layout/SeventyThirty';
import theme from '../theme';

export default function perks() {
  const perks = [
    {
      heading: 'Easy and Safe Online Buying',
      paragraph:
        'With our tyre search tool you are able to easily filter and find the tyres that best fit your needs. After a few clicks, you will have selected your tyres and paid online with SSL secured pages. Our systems will notify you of the status of your order by email.',
      image: <Buy />,
      imageAlign: 'flex-end',
    },
    {
      heading: 'Convenience',
      paragraph:
        'We want to make the buying and installation process hassle-free and simple with more than 500+ fitting stations Nation-wide. Find out more about tyre fitting here',
      image: <CarLift />,
      imageFirst: true,
      imageAlign: 'flex-start',
    },
    {
      heading: 'Great savings',
      paragraph:
        'With us, you can save up to 10% off the RRP. We offer tyre specials such as buy 4, get the 4th for free, cash back promotions and other deals. See here our current tyre promos.',
      image: <LightBulb />,
      imageAlign: 'flex-start',
    },
    {
      heading: 'Fast and Free shipping within Lagos',
      paragraph:
        'We offer free shipping within Lagos and 95% of orders purchased before 12.30 pm, get dispatched the same day.',
      image: <Present />,
      imageFirst: true,
      imageAlign: 'flex-end',
    },
  ];

  return (
    <section className='perks'>
      {perks.map((item, index) => (
        <SeventyThirty
          text={
            <div className='perk-text'>
              <h4 className='perk-heading' id={`ph-${index}`}>
                {item.heading}
              </h4>
              <p className='perk-paragraph'>{item.paragraph}</p>
            </div>
          }
          image={item.image}
          key={index}
          imageFirst={item.imageFirst ? item.imageFirst : false}
          imageAlign={item.imageAlign ? item.imageAlign : 'initial'}
        />
      ))}
      <style jsx>{`
        .perks {
          margin-bottom: 100px;
        }
        .perk-heading {
          font-size: 36px;
          color: ${theme.colors.primary};
          max-width: 350px;
          margin-right: auto;
          line-height: 46px;
          margin-bottom: 25px;
        }
        #ph-3 {
          max-width: 100%;
        }
        .perk-paragraph {
          color: ${theme.colors.paragraphColor};
          line-height: 32px;
        }
      `}</style>
    </section>
  );
}
