import React from 'react';
import TextGroup from '../layout/TextGroup';

export default function Terms() {
  const terms = [
    {
      heading: 'Online Privacy Policy',
      paragraph: `Tyreman respects individual privacy and values your confidence. We strive to process personal information in a manner consistent with the laws of the countries in which we do business.`,
      headingSize: '36px',
      headingSpacing: '30px',
    },
    {
      heading: `Terms and Conditions`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Other Websites`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Disclaimer`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Advertising`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Third Parties`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Payment`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
    {
      heading: `Requisition`,
      paragraph: `You are not required to provide any PII to use this site. Any information you do provide through this site will be maintained in a reasonably secure manner and will only be used or disclosed in a manner consistent with the purposes for which you provide the information, or as otherwise disclosed to you, including as described in this policy. For more information on Goodyear's privacy policies and practices, click on this link.`,
    },
  ];

  return (
    <section className='terms'>
      <div className='container-xl'>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-lg-10'>
            {terms.map((policy, index) => (
              <TextGroup
                key={index}
                heading={<h3>{policy.heading}</h3>}
                paragraph={<p>{policy.paragraph}</p>}
                headingSize={policy.headingSize}
                id={`policy-${index + 1}`}
                headingSpacing={policy.headingSpacing}
              />
            ))}
          </div>
          <div className='d-none d-lg-block col-lg-1'></div>
        </div>
      </div>
      <style jsx>
        {`
          .terms {
            margin-top: 70px;
          }
        `}
      </style>
    </section>
  );
}
