import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';
import { title, detail } from '../style/styles';

const PhoneNumberInput = ({
  setPhoneNumber
}) => {

  function handleInput(event) {
    setPhoneNumber(event.target.value);
  }

  return (
    <Grid item xs={12}>
      <p style={title}>聯絡號碼</p>
      <p style={detail}> 
        請輸入手機號碼或學校分機
      </p>
      <TextField
        onChange={handleInput}
        fullWidth
        variant="outlined"
        defaultValue=""
      />
    </Grid>
  )
}

PhoneNumberInput.propTypes = {
  setPhoneNumber: PropTypes.func.isRequired,
};


export default PhoneNumberInput