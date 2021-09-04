import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, RadioGroup, FormControlLabel, Grid, Radio }from '@material-ui/core';
import { title, detail, requireSymbol, errorMessage } from '../style/styles';

const allowedDebugSelector = ({
  setIsAllowedDebug,
  isAllowedDebugError,
}) => {

  function onOptionSelect(event){
    const isAllowedDebug = event.target.value === 'Yes';
    setIsAllowedDebug(isAllowedDebug);
  }

  return (
    <>
      <Grid item xs={12}>
        <FormControl component="fieldset" error={isAllowedDebugError}>
          <p style={title}> 您願意讓均一使用您(該)均一帳號來找出問題嗎？
            <span style={requireSymbol}>*</span>
          </p>
          <p style={detail}> 
            (均一不會觀看、使用您的私人身份資訊，也不會影響您正常使用)
          </p>
          <RadioGroup onChange={onOptionSelect}>
            <FormControlLabel value="Yes" control={<Radio />} label="我願意" />
            <FormControlLabel value="No" control={<Radio />} label="我不願意" />
          </RadioGroup>
          {
            isAllowedDebugError && (
              <FormHelperText style={errorMessage}>請選擇</FormHelperText>
            )
          }
        </FormControl> 
      </Grid>
    </>
  )
}

allowedDebugSelector.propTypes = {
  isAllowedDebugError: PropTypes.bool,
  setIsAllowedDebug: PropTypes.func.isRequired,
};


export default allowedDebugSelector