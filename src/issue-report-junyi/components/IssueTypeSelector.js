import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FormControl, Grid, FormHelperText, InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lonlyTitle, requireSymbol }from '../style/styles';
import grey from '@material-ui/core/colors/grey';

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

const IssueType = ({
  setIssueType,
  issueTypeDefaultValue,
  isError
}) =>  {

  const [value, setValue] = useState("none");
  const [showPlaceholder, setShowPlaceholder] = useState(value === "none");
  const classes = useStyles();

  
  const issueTypeList = ["問題回報"];
  // todo：下一階段會上線「平台功能許願」
  // const issueTypeList = ["問題回報", "平台功能許願", "業務合作", "其他"] 

  const handleSelect = (event) => {
    const vaule = event.target.value;
    setIssueType(vaule);
    setValue(vaule);
  };

  return (
    <>
      <Grid item xs={12}>
        <p style={lonlyTitle}>回報類型
          <span style={requireSymbol}>*</span>
        </p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}
          error={isError}
        >
          <Select
            value={issueTypeDefaultValue ? issueTypeDefaultValue : "none"}
            displayEmpty
            onChange={handleSelect}
            onFocus={(e) => setShowPlaceholder(false)}
            onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
            className={ value === "none" && !issueTypeDefaultValue ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder ? classes.menuitemhidden : null}
              value="none" disabled>
              請選擇問題類型
            </MenuItem>
            { issueTypeList.map(type => 
              <MenuItem key={type} value={type}>{type}</MenuItem>
              )
            }
          </Select>
          { isError && 
            (<FormHelperText>請選擇問題類型</FormHelperText>)
          }
        </FormControl>
      </Grid>
    </>
  );
}

IssueType.propTypes = {
  setIssueType: PropTypes.func.isRequired,
  issueTypeDefaultValue: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};


export default IssueType