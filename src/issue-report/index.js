import React, {useState} from 'react';
import {Container, TextField, Button, Grid}from '@material-ui/core';
import HintReminder from './components/CategorySelector';
import CategorySelector from './components/CategorySelector';
import Screenshot from './components/Screenshot';
import OtherDevice from './components/OtherDevice';


// todo: 突然發現全頁面，不能截圖，所以還是要 popup，悲劇Q_Q
const Reporter = () => {
  const [hints, setHints] = useState('');

  function handleOnclick(){
    console.log('hi')
  }
  
  return (
    <Container>
      <Grid container spacing={3}>
        <h1> 問題回報 </h1>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            label="電子信箱"/>
        </Grid>
        <Grid item xs={12}>
          <CategorySelector
           setHint={setHints}
          />
        </Grid>
        <Grid item xs={12}>
        {
          hints && <HintReminder hints={hints}/>
        }
        </Grid>
        <Grid item xs={12}>
          <TextField
           fullWidth
            multiline 
            placeholder="把你遇到的問題告訴我們"
            label="問題描述"
          />
        </Grid>
        <Grid item xs={12}>
          <Screenshot/>
        </Grid>
        <Grid item xs={12}>
          <OtherDevice/>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleOnclick}>送出</Button>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Reporter