import React, {useState} from 'react';
import {FormControl, Grid, InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const IssueType = (props) =>  {
  const [value, setValue] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");

  const handleSelect = (event) => {
    const vaule = event.target.value
    props.setIssueType(vaule);
    setValue(vaule)
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
        <p>問題類型*</p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}>
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
              value="none" disabled>
              請選擇問題類型
            </MenuItem>
            { ["問題回報", "平台功能許願", "業務合作", "其他"].map(type => 
              <MenuItem value={type} >{type}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}


export default IssueType