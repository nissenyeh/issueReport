import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Grid, InputLabel, Select, MenuItem }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {problemCategory, problemHint} from '../constant'



// const HintRemider = (props) => {
//   return (
//     <>
//       <Grid item xs={12}>
//         <div>請填寫以下問題，可以更有效解決你的問題喔！</div>
//       </Grid>
//       { props.hints.map(hint=>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <FormLabel component="legend">{hint.question}</FormLabel>
//             <RadioGroup row>
//               <FormControlLabel value="Yes" control={<Radio />} label={hint.option1} />
//               <FormControlLabel value="No" control={<Radio />} label={hint.option2} />
//             </RadioGroup>
//           </FormControl> 
//         </Grid>
//       )}
//     </>
//   )
// }

const CategorySelector = (prop) =>  {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setSubCategory(event.target.value);

  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: "100%",
    },
  }));

  const Categories = Object.keys(problemCategory)

  const classes = useStyles();

  const hints = problemHint[subCategory]
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel fullWidth>問題分類</InputLabel>
            <Select
              value={category}
              onChange={handleChangeCategory}
            >
              { Categories.map(category => 
                <MenuItem value={category} >{category}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl}>
            <InputLabel fullWidth>問題小分類</InputLabel>
            <Select
              value={subCategory}
              onChange={handleChangeSubCategory}
            >
              { category && problemCategory[category].map(subcategory => 
                <MenuItem value={subcategory} >{subcategory}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </Grid>
        {/* { 
          hints && <HintRemider hints={hints}/>
        } */}
      </Grid>
    </>
  );
}


export default CategorySelector