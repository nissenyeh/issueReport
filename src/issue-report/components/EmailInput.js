import React, {useState} from 'react';
import { isValidEmail } from '../util/util'
import {TextField, Grid }from '@material-ui/core';


const EmailInput = (props) => {
  console.log(props.hint)
  const [emailValid, setEmailValid] = useState(true);

  const titleDescStyle = {
    fontSize: "13px",
    color: "#6a6a6f",
    lineHeight: "8px"
  }

  function handleEmailInput(event){
    const email = event.target.value
    props.setEmail(email)
    const isValid = isValidEmail(email)
    setEmailValid(isValid)  
  }

  return (
    <Grid item xs={12}>
      <p>聯絡信箱*</p>
      <p style={titleDescStyle}> 
        請輸入可聯絡的信箱，若為附屬帳號，建議找家長或老師協助
      </p>
      <TextField
        onChange={handleEmailInput}
        fullWidth
        error={!emailValid}
        variant="outlined"
        helperText={!emailValid && "請輸入合法的 Email"}
      />
    </Grid>
  )
}

export default EmailInput