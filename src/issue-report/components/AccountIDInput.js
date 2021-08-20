import React, {useState} from 'react';
import {TextField, Grid }from '@material-ui/core';


const AccountIDInput = (props) => {
  const [emailValid, setEmailValid] = useState(true);

  const titleDescStyle = {
    fontSize: "13px",
    color: "#6a6a6f",
    lineHeight: "8px"
  }

  function handleInput(event){
    const accountID = event.target.value
    props.setAccountID(accountID)
    // setEmailValid(isValid)  
  }

  // todo：放上「帳號ID」連結
  return (
    <Grid item xs={12}>
      <p>發生問題的「帳號ID」*</p>
      <p style={titleDescStyle}> 
        如果可以告訴我們發生問題的帳號，可以讓我更好的解決問題。如何知道帳號ID，請參考...
      </p>
      <TextField
        onChange={handleInput}
        fullWidth
        error={!emailValid}
        variant="outlined"
        helperText={!emailValid && "請輸入合法的 Email"}
      />
    </Grid>
  )
}

export default AccountIDInput