import React ,{ useState }from 'react';
import {FormControl, Grid, InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const RoleSelector = (props) =>  {
  const [value, setValue] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  const handleSelect = (event) => {
    const vaule = event.target.value
    setValue(vaule)
    props.setRole(vaule);
  };

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

  return (
    <>
      <Grid item xs={12}>
        <p>你的身份*</p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}
        >
          <Select
            defaultValue="none"
            displayEmpty
            onChange={handleSelect}
            onFocus={(e) => setShowPlaceholder(false)}
            onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
            className={ value === "none" ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder ? classes.menuitemhidden : null}
              key="0" disabled value="none" >
              你的身份
            </MenuItem>
            { ["學生", "老師", "家長", "訪客"].map(role => 
              <MenuItem value={role} >{role}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}


export default RoleSelector