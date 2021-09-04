import React, { useEffect }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button }from '@material-ui/core';
import html2canvas from 'html2canvas';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { title, detail } from '../style/styles';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
}));

const imageStyle = {
  border: "1px solid #6a6a6f"
}

const Screenshot = ({
  isFromReportPage,
  image,
  setImage,
}) =>  {

  const classes = useStyles();

  function autoScreenshot() {
    html2canvas(document.body, {
      useCORS: true,
    }).then((canvas) => {
      const imgURL = canvas.toDataURL("image/png");
      setImage(imgURL);
    });
  }

  function onUploadChange(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      const imgURL = URL.createObjectURL(img)
      setImage(imgURL);
    }
  };

  useEffect(()=>{
    if(!isFromReportPage){
      autoScreenshot();
    }
  },[])

  return (
    <>
     <Grid item xs={12}>
      <p style={title}>問題截圖</p>
      <p style={detail}> 
        如果可以提供問題相關的截圖，可以幫我們更清楚、快速的理解問題喔！
      </p>
     </Grid>
     {!isFromReportPage && (
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
          src={image} alt="" width="100%" />
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

Screenshot.propTypes = {
  isFromReportPage: PropTypes.bool.isRequired,
  image: PropTypes.string,
  setImage: PropTypes.func.isRequired,
};


export default Screenshot