import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, InputAlt, TextAreaAlt } from '../inputComponents';

export default function ContactForm() {
  return (
    <div className='col-md-6 mb-5 mb-md-0 '>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'name is too short')
            .required('Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          phone: Yup.string()
            .min(10, 'Telephone number is invalid')
            .required('Telephone number is required'),
          message: Yup.string()
            .min(10, 'Minimum of 20 characters')
            .required('Message is required'),
        })}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            {/* inputs  */}

            <InputAlt label={'Name'} name='name' id='name' />

            <InputAlt
              name='phone'
              label={'Telephone'}
              type={'number'}
              id='phoneNumber'
              onchange={(e) => {
                const string = e.target.value.toString();
                props.setValues(string, 'phone');
              }}
            />
            <InputAlt label={'Email'} name='email' type='email' id='email' />
            <TextAreaAlt
              label={'Messsage'}
              name='message'
              id='message'
              row={1}
            />
            {/* button */}
            <div className='row w-100 text-left my-3 mx-0'>
              <Button className='standard-type-2 blue-type' type='submit'>
                Send
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
