import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FormControl, Grid, FormHelperText, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lonlyTitle, requireSymbol }from '../style/styles';
import grey from '@material-ui/core/colors/grey';

import { problemCategory } from '../data/problemHint'

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

const CategorySelector = ({
  category,
  isCategoryError,
  categoryDefaultValue,
  setCategory,
  isSubCategoryError,
  setSubCategory,
}) =>  {

  const [value1, setValue1] = useState("none");
  const [showPlaceholder1, setShowPlaceholder1] = useState(value1 === "none");

  const [value2, setValue2] = useState("none");
  const [showPlaceholder2, setShowPlaceholder2] = useState(value2 === "none");

  const Categories = Object.keys(problemCategory);

  const classes = useStyles();

  const handleChangeCategory = (event) => {
    const vaule = event.target.value;
    setCategory(vaule);
    setValue1(vaule);
    setValue2('none');
  };

  const handleChangeSubCategory = (event) => {
    const vaule = event.target.value;
    setSubCategory(vaule);
    setValue2(vaule);
  };

  return (
    <>
      <Grid item xs={12}>
        <p style={lonlyTitle}>
          問題分類
          <span style={requireSymbol}>*</span>
        </p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}
          error={isCategoryError}
        >
          <Select
            value={categoryDefaultValue ? categoryDefaultValue : "none"}
            displayEmpty
            onChange={handleChangeCategory}
            onFocus={() => setShowPlaceholder1(false)}
            onClose={(e) => setShowPlaceholder1(e.target.value === undefined)}
            className={ value1 === "none" && !categoryDefaultValue ? classes.selectdisabled : null}
          >
            <MenuItem 
              className= {!showPlaceholder1 ? classes.menuitemhidden : null}
              value="none" disabled>
              請選擇
            </MenuItem>
            { Categories.map(category => 
              <MenuItem key={category} value={category}>{category}</MenuItem>
              )
            }
          </Select>
          { isCategoryError && 
            (<FormHelperText>請選擇問題分類</FormHelperText>)
          }
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <p style={lonlyTitle}>
          問題小分類
          <span style={requireSymbol}>*</span>
        </p>
        <FormControl 
          variant="outlined"
          className={classes.formControl}
          error={isSubCategoryError}
        >
          <Select
            displayEmpty
            onChange={handleChangeSubCategory}
            onFocus={() => setShowPlaceholder2(false)}
            onClose={(e) => setShowPlaceholder2(e.target.value === undefined)}
            className={ value2 === "none" ? classes.selectdisabled : null}
            defaultValue="none"
            value={value2}
          >
            <MenuItem 
              className= {!showPlaceholder2 ? classes.menuitemhidden : null}
              value="none" disabled>
              請選擇
            </MenuItem>
            { category && problemCategory[category].map(subcategory => 
              <MenuItem key={subcategory} value={subcategory} >{subcategory}</MenuItem>
              )
            }
          </Select>
          { isSubCategoryError && 
            (<FormHelperText>請選擇問題小分類</FormHelperText>)
          }
        </FormControl>
      </Grid>
    </>
  );
}

CategorySelector.propTypes = {
  category: PropTypes.string,
  isCategoryError: PropTypes.bool.isRequired,
  categoryDefaultValue: PropTypes.string,
  setCategory: PropTypes.func.isRequired,
  isSubCategoryError: PropTypes.bool.isRequired,
  setSubCategory: PropTypes.func.isRequired,
};


export default CategorySelector