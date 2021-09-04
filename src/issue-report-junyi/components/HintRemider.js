import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Grid }from '@material-ui/core';
import { requireSymbol }from '../style/styles';

const HintRemider = ({
  hints
}) => {

  return (
    <>
      <Grid item xs={12}>
        <div>
          請填寫以下問題，可以更有效解決你的問題喔！
          <span style={requireSymbol}>
            *
          </span>
        </div>
      </Grid>
      { hints.map((hint,index)=>
        <Grid key={`${hint}-${index}`} item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              { index+1 } 
              { "." }
              { hint.question } 
              { hint.reference && (  
                  <> 
                    <br/>
                    <br/>
                    <span>
                      (參考文件: 
                        <a 
                          href={hint.reference.link}
                          target="_blank" 
                          rel="noreferrer">{hint.reference.title}
                        </a>
                      )
                    </span> 
                  </>
                )
               }
            </FormLabel>
            <RadioGroup>
              <FormControlLabel value="Yes" control={<Radio />} label={hint.option1} />
              <FormControlLabel value="No" control={<Radio />} label={hint.option2} />
            </RadioGroup>
          </FormControl> 
        </Grid>
      )}
    </>
  )
}

HintRemider.propTypes = {
  hints: PropTypes.array.isRequired,
};



export default HintRemider