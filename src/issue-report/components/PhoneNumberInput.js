import React from 'react';
import { TextField, Grid }from '@material-ui/core';


const OptionalContactInfo = (props) => {

  const titleDescStyle = {
    fontSize: "13px",
    color: "#6a6a6f",
    lineHeight: "8px"
  }

  function handleInput(event){
    props.setOptionalContact(event.target.value)
  }

  return (
    <Grid item xs={12}>
      <p>聯絡號碼</p>
      <p style={titleDescStyle}> 
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

export default OptionalContactInfo