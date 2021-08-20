import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Grid,InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserList, OSList, DeviceList} from '../util/userEnvironment'
import grey from '@material-ui/core/colors/grey';

const OtherDevice = (props) => {
  const originState = {
    value1: 'none',
    value2: 'none',
    value3: 'none'
  }
  const [value, setValue] = useState(originState);
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  function onDeviceSelect(event){
    const IsOtherDevice = event.target.value === 'Yes' ? true : false
    props.setIsOtherDevice(IsOtherDevice)
  }

  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: "100%",
    },
    selectdisabled: {
      color: grey[500],
    },
    menuitemhidden: {
      display: "none"
    },
  }));

  const classes = useStyles();

  const problems = ['瀏覽器', '作業系統', '設備']

  // todo：覺得這邊可以可以 refactor
  function getValue(category){
    switch(category){
      case "瀏覽器":
        return value.value1;
      case "作業系統":
        return value.value2;
      case "設備":
        return value.value3;
      default:
        return null;
    }
  }

  function handleOpen(category, open){
    switch(category){
      case "瀏覽器":
        return (event) => setShowPlaceholder(value.value1=open);
      case "作業系統":
        return (event) => setShowPlaceholder(value.value2=open);
      case "設備":
        return (event) => setShowPlaceholder(value.value3=open);
      default:
        return null;
    }
  }

  function handleChange(category){
    switch(category){
      case "瀏覽器":
        return (event) => props.setBrowser(event.target.value);
      case "作業系統":
        return (event) => props.setOS(event.target.value);
      case "設備":
        return (event) => props.setDevice(event.target.value);
      default:
        return null;
    }
  }

  function getOptionList(category){
    switch(category){
      case "瀏覽器":
        return BrowserList;
      case "作業系統":
        return OSList;
      case "設備":
        return DeviceList;
      default:
        return null;
    }
  }

  // todo：把教學文件放上去
  return (
    <>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <p>問題發生在別人的設備？*</p>
          <RadioGroup row onChange={onDeviceSelect}>
            <FormControlLabel value="Yes" control={<Radio />} label='是' />
            <FormControlLabel value="No" control={<Radio />} label='不是' />
          </RadioGroup>
        </FormControl> 
      </Grid>
      {
        props.isOtherDevice && (
          problems.map(problem=>
            (
              <Grid item xs={12}>
                <p>{problem}</p>
                <FormControl 
                  variant="outlined"
                  className={classes.formControl}
                >

                  <Select 
                    defaultValue="none"
                    displayEmpty
                    onChange={handleChange(problem)}
                    onFocus={(e) => setShowPlaceholder(handleOpen(problem, false))}
                    onClose={(e) => setShowPlaceholder(handleOpen(problem, true))}
                    className={ getValue(problem) === "none" ? classes.selectdisabled : null}
                  > 
                    <MenuItem 
                      className= {!showPlaceholder ? classes.menuitemhidden : null}
                      key="0" disabled value="none" >
                      請選擇{problem}
                    </MenuItem>
                    {getOptionList(problem).map(option=>
                      <MenuItem value={option}>{option}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid>
            )
          )
        )
      }
    </>
  )
}

export default OtherDevice