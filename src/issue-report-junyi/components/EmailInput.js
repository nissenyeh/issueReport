import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid }from '@material-ui/core';
import { title, detail, requireSymbol }from '../style/styles';

const EmailInput = ({
  emailDefaultValue,
  isError,
  setEmail
}) => {

  function handleEmailInput(event) {
    const email = event.target.value;
    setEmail(email);
  }

  return (
    <Grid item xs={12}>
      <p style={title}>聯絡信箱
        <span style={requireSymbol}>*</span>
      </p>
      <p style={detail}> 
        請輸入可聯絡的信箱，若為附屬帳號，建議找家長或老師協助
      </p>
      <TextField
        onChange={handleEmailInput}
        value={emailDefaultValue}
        helperText={isError && "請輸入合法的 Email"}
        error={isError}
        fullWidth
        variant="outlined"
      />
    </Grid>
  )
}

EmailInput.propTypes = {
  isError:PropTypes.bool.isRequired,
  emailDefaultValue: PropTypes.string,
  setEmail : PropTypes.func.isRequired,
};

export default EmailInput