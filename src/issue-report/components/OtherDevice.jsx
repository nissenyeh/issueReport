import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Grid,InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserList, OSList, DeviceList} from '../constant'

const BrowserSelect = () => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel fullWidth>瀏覽器</InputLabel>
          <Select> 
            {BrowserList.map(browser=>
              <MenuItem value={browser}>{browser}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
  </>
  )
}

const OSSelect = () => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel fullWidth>作業系統</InputLabel>
          <Select> 
            {OSList.map(OS=>
              <MenuItem value={OS}>{OS}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
}

const DeviceSelect = () => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel fullWidth>設備</InputLabel>
          <Select> 
            {DeviceList.map(device=>
              <MenuItem value={device}>{device}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
  </>
  )
}

const OtherDevice = (props) => {
  const [isOtherDevice, setIsOtherDevice] = useState(false);

  function onDeviceSelect(event){
    setIsOtherDevice(event.target.value)
  }

  return (
    <>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">問題發生在別人的設備？</FormLabel>
          <RadioGroup row onChange={onDeviceSelect}>
            <FormControlLabel value={true} control={<Radio />} label='是' />
            <FormControlLabel value={false} control={<Radio />} label='不是' />
          </RadioGroup>
        </FormControl> 
      </Grid>
      {
        isOtherDevice && (
          <>
            <BrowserSelect/>
            <OSSelect/>
            <DeviceSelect/>
          </>
        )
      }
    </>
  )
}

export default OtherDevice