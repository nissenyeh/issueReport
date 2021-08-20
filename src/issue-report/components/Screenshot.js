import React, { useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button }from '@material-ui/core';
import html2canvas from 'html2canvas';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

const Screenshot = (prop) =>  {

  const classes = useStyles();

  const titleDescStyle = {
    fontSize: "13px",
    color: "#6a6a6f",
    lineHeight: "8px"
  }

  const imageStyle = {
    border: "1px solid #6a6a6f"
  }

  useEffect(()=>{
    if(!prop.isFromReportPage){
      autoScreenshot()
    }
  },[])

  function autoScreenshot(){
    html2canvas(document.body).then(function(canvas) {
      let imgURL = canvas.toDataURL("image/png")
      prop.setImage(imgURL)
    });
  }

  function onUploadChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let imgURL = URL.createObjectURL(img)
      prop.setImage(imgURL);
    }
  };

  return (
    <>
     <Grid item xs={12}>
      <p>問題截圖</p>
      <p style={titleDescStyle}> 
        如果可以提供問題相關的截圖，可以幫我們更清楚、快速的理解問題喔！
      </p>
     </Grid>
     {!prop.isFromReportPage && (
      <Grid item xs={12}>
        <p>如果自動截圖不符合實際狀況，請自行上傳截圖。</p> 
        <Button 
          variant="contained"
          color="default"
          onClick={autoScreenshot}>
            重新截圖
        </Button>
      </Grid>)
     }
      <Grid item xs={12}>
        <img 
          style={imageStyle}
          src={prop.image} alt="" width="100%" />
        <input 
          id="icon-button-file"
          type="file" 
          name="image" 
          onChange={onUploadChange} 
          className={classes.input}/>
        <label 
          htmlFor="icon-button-file"
        >
          <IconButton 
            color="primary" 
            aria-label="upload picture" 
            component="span">
            <PhotoCamera />
          </IconButton>
          請上傳檔案
        </label>
      </Grid>
    </>
  );
}


export default Screenshot