/**
 *
 * DatePicker
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import DatePickerReact from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Div = styled.div`
  margin-bottom: 10px;
`;

export const DatePicker = ({ name }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = value => {
    setDate(value);
  };

  return (
    <>
      <Div>{name}</Div>
      <DatePickerReact selected={date} onChange={handleChange} />
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(DatePicker);
