import React from 'react';
import theme from '../theme';

export default function Paragraph() {
  return (
    <div className='container-xl'>
      <p>
        You are not required to provide any PII to use this site. Any
        information you do provide through this site will be maintained in a
        reasonably secure manner and will only be used or disclosed in a manner
        consistent with the purposes for which you provide the information, or
        as otherwise disclosed to you, including as described in this policy.
        For more information on Goodyear's privacy policies and practices, click
        on this link.
      </p>
      <style jsx>
        {`
          p {
            color: ${theme.colors.primary};
            font-size: 18px;
            line-height: 32px;
            max-width: 1013px;
            margin-bottom: 70px;
          }
        `}
      </style>
    </div>
  );
}
