import React, { Component } from 'react';
import theme from '../theme';

export default class ContactArea extends Component {
  render() {
    const { form, address } = this.props;
    return (
      <section className='contact-us'>
        <div className='container-xl'>
          <div className='row'>
            <div className='d-none d-lg-block col-lg-1'></div>
            <div className='col-12 col-lg-10'>
              <div className='contact-area w-100'>
                <div className='container-xl'>
                  <div className='row'>
                    <div className='d-none d-lg-block col-lg-1'></div>
                    {form}
                    {address}
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-lg-block col-lg-1'></div>
          </div>
        </div>
        <style jsx>
          {`
            .contact-area {
              background: ${theme.colors.tertiary};
              border-radius: ${theme.radius.button};
              box-shadow: ${theme.shadow.contact};
              padding: 80px 0 50px;
              margin: -60px 0 50px;
            }
          `}
        </style>
      </section>
    );
  }
}
