import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { FormControl, FormHelperText, RadioGroup, FormControlLabel, Grid, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { title, detail, requireSymbol, errorMessage } from '../style/styles';
import { BrowserList, OSList, DeviceList } from '../data/userEnvironment'


const useStyles = makeStyles(() => ({
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


const OtherUserDevice = ({
  isOtherUserDevice,
  setIsOtherUserDevice,
  isOtherUserDeviceError,
  setBrowser,
  setDevice,
  setOS,
  isOtherBrowserError,
  isOtherOSError,
  isOtherDeviceError,
}) => {

  const originState = {
    value1: 'none',
    value2: 'none',
    value3: 'none'
  }
  const [value, setValue] = useState(originState);
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  function onSelect(event){
    const isOtherUser = event.target.value === 'Yes'
    setIsOtherUserDevice(isOtherUser);
  }

  const classes = useStyles();

  const problems = ['瀏覽器', '作業系統', '設備'];

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
        return () => {setShowPlaceholder(value.value1=open)};
      case "作業系統":
        return () => {setShowPlaceholder(value.value2=open)};
      case "設備":
        return () => {setShowPlaceholder(value.value3=open)};
      default:
        return null;
    }
  }

  function handleChange(category){
    switch(category){
      case "瀏覽器":
        return (event) => setBrowser(event.target.value);
      case "作業系統":
        return (event) => setOS(event.target.value);
      case "設備":
        return (event) => setDevice(event.target.value);
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

  function getErrorState(category){
    switch(category){
      case "瀏覽器":
        return isOtherBrowserError;
      case "作業系統":
        return isOtherOSError;
      case "設備":
        return isOtherDeviceError;
      default:
        return null;
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <FormControl component="fieldset" error={isOtherUserDeviceError} >
          <p style={title}>問題發生在別人的設備？
            <span style={requireSymbol}>*</span>
          </p>
          <RadioGroup onChange={onSelect}>
            <FormControlLabel value="Yes" control={<Radio />} label="是" />
            <FormControlLabel value="No" control={<Radio />} label="不是" />
          </RadioGroup>
          {
            isOtherUserDeviceError && (
              <FormHelperText style={errorMessage}>請選擇</FormHelperText>
            )
          }
        </FormControl> 
      </Grid>
      {
        isOtherUserDevice && (
          <Grid item xs={12}>
            <p style={detail}> 
            提示：如果不知道裝置版本，請參考
              <a 
                href="https://drive.google.com/file/d/1-hRQQ_04PbahBsou2doucrQPt8prhaSP/view?usp=sharing"
                target="_blank" 
                rel="noreferrer">「如何查詢使用的瀏覽器 / 載具之版本」
              </a>
            </p>
          </Grid>  
        )
      }
      {
        isOtherUserDevice && (
          problems.map(problem=>
            (
              <Grid key={problem} item xs={12}>
                <p style={title}>使用的{problem}
                  <span style={requireSymbol}>*</span>
                </p>
                <FormControl 
                  variant="outlined"
                  className={classes.formControl}
                  error={getErrorState(problem)}
                >
                  <Select 
                    defaultValue="none"
                    displayEmpty
                    onChange={handleChange(problem)}
                    onFocus={() => setShowPlaceholder(handleOpen(problem, false))}
                    onClose={() => setShowPlaceholder(handleOpen(problem, true))}
                    className={ getValue(problem) === "none" ? classes.selectdisabled : null}
                  > 
                    <MenuItem 
                      className= {!showPlaceholder ? classes.menuitemhidden : null}
                      disabled value="none">
                      請選擇{problem}
                    </MenuItem>
                    {getOptionList(problem).map(option=>
                      <MenuItem key={`${problem}-${option}`} value={option}>{option}</MenuItem>
                    )}
                  </Select>
                  { getErrorState(problem) && (<FormHelperText>請選擇{problem}</FormHelperText>)}
                </FormControl>
              </Grid>
            )
          )
        )
      }
    </>
  )
}

OtherUserDevice.propTypes = {
  isOtherUserDevice: PropTypes.bool,
  setIsOtherUserDevice: PropTypes.func.isRequired,
  isOtherUserDeviceError: PropTypes.bool.isRequired,
  setBrowser: PropTypes.func.isRequired,
  setDevice: PropTypes.func.isRequired,
  setOS: PropTypes.func.isRequired,
  isOtherBrowserError: PropTypes.bool.isRequired,
  isOtherOSError: PropTypes.bool.isRequired,
  isOtherDeviceError: PropTypes.bool.isRequired,
};

export default OtherUserDevice