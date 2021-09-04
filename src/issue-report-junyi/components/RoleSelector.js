import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import {FormControl, Grid, FormHelperText, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { lonlyTitle, requireSymbol } from '../style/styles';

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

const RoleSelector = ({
  isError,
  setRole,
}) =>  {
  const [value, setValue] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  const classes = useStyles();

  const handleSelect = (event) => {
    const vaule = event.target.value;
    setValue(vaule);
    setRole(vaule);
  };

  return (
    <>
      <Grid item xs={12}>
        <p style={lonlyTitle}>你的身份
          <span style={requireSymbol}>*</span>
        </p>
        <FormControl 
          error={isError}
          variant="outlined"
          className={classes.formControl}
        >
          <Select
            defaultValue="none"
            displayEmpty
            onChange={handleSelect}
            onFocus={() => setShowPlaceholder(false)}
            onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
            className={ value === "none" ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder ? classes.menuitemhidden : null}
              key="0" disabled value="none" >
              你的身份
            </MenuItem>
            { ["學生", "老師", "家長", "訪客"].map(role => 
              <MenuItem key={role} value={role}>{role}</MenuItem>
              )
            }
          </Select>
          { isError && 
            (<FormHelperText>請選擇你的身份</FormHelperText>)
          }
        </FormControl>
      </Grid>
    </>
  );
}

RoleSelector.propTypes = {
  isError: PropTypes.bool.isRequired,
  setRole: PropTypes.func.isRequired,
};


export default RoleSelector