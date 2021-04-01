import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import cities from './mock-data';

import bottomArrow from '../../assets/img/icon/Bottom-Arrow.svg';
import './CheckoutAddress.scss';

const disabledInputStyle = {
  color: '#acacac'
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const CheckoutAddressSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  city: Yup.string().required('City is required'),
  district: Yup.string().required('District is required'),
  address: Yup.string().required('Address is required'),
});

const CheckoutAddress = () => {
  const [isCityChanged, setIsCityChanged] = useState(false);
  const [isDistrictChanged, setIsDistrictChanged] = useState(false);
  const [chosenCity, setChosenCity] = useState(null);
  const [chosenValueCity, setChosenValueCity] = useState('');

  const handleCityChange = (event) => {
    setIsCityChanged(true);
    const {value} = event.target;
    const newChosenCity = cities.find((city) => city.value === value);
    
    setChosenValueCity(value);
    setChosenCity(newChosenCity);
  };

  const handleDistrictChange = () => {
    setIsDistrictChanged(true);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
  };

  return <div className="ca">
    <div className="ca-main">
      <p className="ca-title font-title size-25 color-nero mb-20px">Where should we deliver your order?</p>
      <Formik
        initialValues={{ name: '', phone: '', city: '', district: '', address: '' }}
        validationSchema={CheckoutAddressSchema}
        onSubmit={handleSubmit}
      > 
        {({handleChange, isSubmitting}) => (
          <Form className="ca-form text-center w-100">
            <div className="field-container">
              <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-email">name</label>
              <Field type="text" name="name" id="ca-email" className="ca-input size-16 w-100" placeholder="Your name" />
              <ErrorMessage className="color-contessa text-left mt-2" name="name" component="div" />
            </div>

            <div className="field-container">
              <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-phone">phone number</label>
              <Field type="text" name="phone" id="ca-phone" className="ca-input size-16 w-100" placeholder="Phone number" />
              <ErrorMessage className="color-contessa text-left mt-2" name="phone" component="div" />
            </div>

            <div className="field-container position-relative">
              <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-city">city</label>
              <Field
                name="city" 
                id="ca-city" 
                className="ca-input size-16 w-100" 
                placeholder="City" 
                component="select"
                onChange={(e) => {
                  handleCityChange(e);
                  handleChange(e);
                }}
                value={chosenValueCity}
                style={!isCityChanged ? disabledInputStyle : null}
              >
                <option value="" disabled defaultValue>City</option>
                {cities.map(city => <option className="color-nero" key={city.value} value={city.value}>{city.name}</option>)}
              </Field>
              <ErrorMessage className="color-contessa text-left mt-2" name="city" component="div" />
              <img src={bottomArrow} alt="" className="position-absolute" />
            </div>

            <div className="field-container position-relative">
              <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-district">district</label>
              <Field
                name="district"
                id="ca-district"
                className="ca-input size-16 w-100"
                placeholder="District"
                component="select"
                onChange={(e) => {
                  handleChange(e);
                  handleDistrictChange(e);
                }}
                style={!isDistrictChanged ? disabledInputStyle : null}
              >
                <option value="" disabled defaultValue>District</option>
                {chosenCity ? chosenCity.districts.map(district => <option className="color-nero" key={district.value} value={district.value}>{district.name}</option>) : null}
              </Field>
              <ErrorMessage className="color-contessa text-left mt-2" name="district" component="div" />
              <img src={bottomArrow} alt="" className="position-absolute" />
            </div>

            <div className="field-container">
              <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-address">address</label>
              <Field type="text" name="address" id="ca-address" className="ca-input size-16 w-100" placeholder="Name" />
              <ErrorMessage className="color-contessa text-left mt-2" name="address" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting} className="ca-btn text-white text-uppercase">
              deliver to this address
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>;
};

export default CheckoutAddress;