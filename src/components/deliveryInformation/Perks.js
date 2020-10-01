import React from 'react';
import { Protection, SearchTwo, Stars } from '../svgs';
import SeventyThirty from '../layout/SeventyThirty';
import theme from '../theme';

export default function Perks() {
  const perks = [
    {
      heading: 'Authority to Leave',
      paragraph: (
        <div>
          <p className='blue-paragraph'>
            Customers have the option to authorize delivery drivers to leave the
            ordered items in a secure location at the address provided for
            delivery. If the driver believes the location is no secure, he will
            keep the items and will wait for instructions to re-deliver the
            tyres at a later time. (Additional fees may apply to multiple
            re-deliveries).
          </p>
          <p className='bold-paragraph'>
            Please be aware, if an ATL is placed on the delivery of a good, we
            are not responsible for any loss or damage to the items. We will
            happily assist you in contacting the logistics company used to
            re-confirm the delivery with the driver, however if goods are not
            found, no replacement will be sent.
          </p>
        </div>
      ),
      image: <Protection />,
      imageAlign: 'flex-end',
    },
    {
      heading: 'Tracking Numbers',
      paragraph: (
        <p>
          Tracking Numbers are provided when possible; this is dependent on the
          logistic company used and are not always provided.
        </p>
      ),
      image: <SearchTwo />,
      imageFirst: true,
      imageAlign: 'center',
    },
    {
      heading: 'Great savings',
      paragraph: (
        <div>
          <p className='blue-paragraph'>
            Tyreman.ng strongly recommends you assess the items before signing
            for delivery to confirm they match the items ordered. Once you are
            happy and satisfied the items are correct, you can sign. If, in the
            unlikely event that there is an issue with the items delivered or
            they do not appear to be what you ordered, please refuse delivery so
            the courier can return the items to us for inspection and
            investigate the reason for the issue.
          </p>
          <p>
            Contact customer service immediately if this is the case and we will
            sort and manage the issue as soon as possible.
          </p>
        </div>
      ),
      image: <Stars />,
      imageAlign: 'flex-start',
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
              <div className='perk-paragraphs' id={`pp-${index}`}>
                {item.paragraph}
              </div>
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
        .perk-heading {
          font-size: 36px;
          color: ${theme.colors.primary};
          max-width: 350px;
          margin-right: auto;
          line-height: 46px;
          margin-bottom: 25px;
        }

        :global(.perk-paragraphs p) {
          color: ${theme.colors.paragraphColor};
          line-height: 32px;
        }
      `}</style>
    </section>
  );
}
