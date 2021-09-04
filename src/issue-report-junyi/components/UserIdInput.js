import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid }from '@material-ui/core';
import { title, detail, requireSymbol }from '../style/styles';

const UserIdInput = ({
  isError,
  setUserId
}) => {

  function handleInput(event) {
    const userId = event.target.value;
    setUserId(userId);
  }

  return (
    <Grid item xs={12}>
      <p style={title}>發生問題的帳號之「帳號ID」
        <span style={requireSymbol}>*</span>
      </p>
      <p style={detail}> 
        如果可以告訴我們發生問題的帳號ID，可以讓我更好的解決問題。請參考
        <a 
          href="https://drive.google.com/file/d/1A-Y5voNJnHIxGQQtaFT8-W-MLmgP_oJH/view"
          target="_blank" 
          rel="noreferrer">「如何知道帳號ID」
        </a>
      </p>
      <TextField
        onChange={handleInput}
        error={isError}
        helperText={isError && "請輸入發生問題的帳號ID"}
        fullWidth
        variant="outlined"
      />
    </Grid>
  )
}

UserIdInput.propTypes = {
  isError: PropTypes.bool.isRequired,
  setUserId : PropTypes.func.isRequired,
};


export default UserIdInput