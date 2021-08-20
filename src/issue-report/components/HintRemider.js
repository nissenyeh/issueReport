import React from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Grid }from '@material-ui/core';


const HintRemider = (props) => {
  console.log(props.hint)
  return (
    <>
      <Grid item xs={12}>
        <div>請填寫以下問題，可以更有效解決你的問題喔！</div>
      </Grid>
      { props.hints.map(hint=>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{hint.question}</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="Yes" control={<Radio />} label={hint.option1} />
              <FormControlLabel value="No" control={<Radio />} label={hint.option2} />
            </RadioGroup>
          </FormControl> 
        </Grid>
      )}
    </>
  )
}

export default HintRemider