import React, { useState, useEffect }from 'react';
import { Grid, Button }from '@material-ui/core';
import html2canvas from 'html2canvas';


const Screenshot = () =>  {

  const [image, setImage] = useState('');

  useEffect(()=>{
    autoScreenshot()
  },[])

  function autoScreenshot(){
    html2canvas(document.body).then(function(canvas) {
      let imgURL = canvas.toDataURL("image/png")
      console.log(imgURL)
      setImage(imgURL)
    });
  }

  function onUploadChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let imgURL = URL.createObjectURL(img)
      setImage(imgURL);
    }
  };

  return (
    <>
      <Grid container spacing={3} style={{backgroundColor: "#E7E9EB"}}>
        <Grid item xs={12}>
          <p>如果自動截圖不符合實際狀況，請自行上傳截圖。</p>
          <Button onClick={autoScreenshot}>重新截圖</Button>
        </Grid>
        <Grid item xs={12}>
          <img src={image} alt="" width="100%" />
          <label for="file">自行上傳：</label>
          <input type="file" name="image" onChange={onUploadChange}/>
        </Grid>
      </Grid>
    </>
  );
}


export default Screenshot