import React, {useState} from 'react';
import {FormControl, Grid, InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import {problemCategory} from '../util/problemHint'

const CategorySelector = (prop) =>  {

  const [value1, setValue1] = useState("none");
  const [showPlaceholder1, setShowPlaceholder1] = useState(value1 === "none");

  const [value2, setValue2] = useState("none");
  const [showPlaceholder2, setShowPlaceholder2] = useState(value2 === "none");

  const handleChangeCategory = (event) => {
    const vaule = event.target.value
    prop.setCategory(vaule);
    setValue1(vaule)
  };

  const handleChangeSubCategory = (event) => {
    const vaule = event.target.value
    prop.setSubCategory(vaule);
    setValue2(vaule);
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

  const Categories = Object.keys(problemCategory)

  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <p>問題分類*</p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}>
          <Select
            defaultValue="none"
            displayEmpty
            onChange={handleChangeCategory}
            onFocus={(e) => setShowPlaceholder1(false)}
            onClose={(e) => setShowPlaceholder1(e.target.value === undefined)}
            className={ value1 === "none" ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder1 ? classes.menuitemhidden : null}
              value="none" disabled>
              請選擇
            </MenuItem>
            { Categories.map(category => 
              <MenuItem value={category} >{category}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <p>問題小分類*</p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}>
          <Select
            defaultValue="none"
            displayEmpty
            onChange={handleChangeSubCategory}
            onFocus={(e) => setShowPlaceholder2(false)}
            onClose={(e) => setShowPlaceholder2(e.target.value === undefined)}
            className={ value2 === "none" ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder2 ? classes.menuitemhidden : null}
              value="none" disabled>
              請選擇
            </MenuItem>
            { prop.category && problemCategory[prop.category].map(subcategory => 
              <MenuItem value={subcategory} >{subcategory}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}


export default CategorySelector