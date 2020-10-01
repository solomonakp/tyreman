import React from 'react';
import { Buy, CarLift, LightBulb, Present } from '../svgs';
import SeventyThirty from '../layout/SeventyThirty';
import theme from '../theme';
import { Button } from '../inputComponents';

export default function Perks() {
  const perks = [
    {
      heading: (
        <div className='catalog'>
          <h3>Our Dunlop tyre catalog</h3>
          <h4>Tyres for cars, SUVs, light trucks and trucks</h4>
        </div>
      ),
      paragraph: (
        <p>
          With our tyre search tool you are able to easily filter and find the
          tyres that best fit your needs. After a few clicks, you will have
          selected your tyres and paid online with SSL secured pages. Our
          systems will notify you of the status of your order by email.
        </p>
      ),
      image: <Buy />,
      imageAlign: 'flex-end',
    },
    {
      heading: <h3>Why Dunlop tyres?</h3>,
      paragraph: (
        <p>
          We want to make the buying and installation process hassle-free and
          simple with more than 500+ fitting stations Nation-wide. Find out more
          about tyre fitting here
        </p>
      ),
      image: <CarLift />,
      imageFirst: true,
      imageAlign: 'center',
    },
    {
      heading: <h3>Save Extra</h3>,
      paragraph: (
        <p>
          With us, you can save up to 10% off the RRP. We offer tyre specials
          such as buy 3, get the 4th for free, cash back promotions and other
          deals. See here our current tyre promos.
        </p>
      ),
      image: <LightBulb />,
      imageAlign: 'flex-start',
    },
    {
      heading: <h3>Buy Dunlop tyres online in nigeria</h3>,
      paragraph: (
        <p>
          We offer free shipping within Lagos and 95% of orders purchased before
          12.30 pm, get dispatched the same day.
        </p>
      ),
      image: <Present />,
      imageAlign: 'flex-start',
      imageFirst: true,
    },
  ];

  return (
    <section className='perks'>
      {perks.map((item, index) => (
        <SeventyThirty
          text={
            <div
              className={`perk-text ${(index + 1) % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className='perk-headings' id={`ph-${index}`}>
                {item.heading}
              </div>
              <div className='perk-paragraphs' id={`pp-${index}`}>
                {item.paragraph}
              </div>
              {index + 1 !== 4 ? (
                <Button className='standard-type-2 perk-btn'>
                  Buy Dunlop Tyres
                </Button>
              ) : null}
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
          margin-bottom: 30px;
        }
        :global(.perk-text.even) {
          text-align: right;
        }
        :global(section.perks div.seventy-thirty) {
          margin-bottom: 100px;
        }
        .perk-headings,
        .perk-paragraphs {
          text-align: left;
        }
        .perk-headings {
          color: ${theme.colors.primary};
          margin-bottom: 25px;
        }
        :global(.perk-headings h3) {
          font-weight: 900;
          line-height: 36px;
          font-size: 36px;
        }
        :global(.catalog h3) {
          margin-bottom: 0;
        }

        :global(.perk-paragraphs p) {
          color: ${theme.colors.paragraphColor};
          line-height: 32px;
        }
      `}</style>
    </section>
  );
}
