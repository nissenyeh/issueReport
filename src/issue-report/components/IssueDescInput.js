import React, {useState} from 'react';
// import { isValidEmail } from '../util/util'
import { TextField, Grid }from '@material-ui/core';

// note: 選擇的 holder： https://dev.to/raphaelchaula/how-to-create-a-select-component-with-placeholder-in-react-fma

const IssueDescInput = (props) => {
  // const [emailValid, setEmailValid] = useState(true);

  const titleDescStyle = {
    fontSize: "13px",
    color: "#6a6a6f",
    lineHeight: "8px"
  }

  function handleDescInput(event){
    const desc = event.target.value
    props.setIssueDesc(desc)
    // const isValid = isValidEmail(email)
    // setEmailValid(isValid)  
  }

  function handleReproduceDescInput(event){
    const desc = event.target.value
    props.setReproduceDesc(desc)
    // const isValid = isValidEmail(email)
    // setEmailValid(isValid)  
  }
  // font-size: 13px;
  // color: #6a6a6f;

  // todo：想讓 * 可以變成紅色
  return (
    <>
      { props.issueType === '問題回報' && 
        (
          <>
            <Grid item xs={12}>
              
              <p>問題描述*</p>
              <p style={titleDescStyle}> 
                盡可能描述你遇到的問題，不要只是寫說「它壞掉了！」
              </p>
              <TextField
                onChange={handleDescInput}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <p>問題重現方式</p>
              <p style={titleDescStyle}> 
                如果能提供問題重現的步驟，可以幫助我們更快、更準確的找出問題發生的原因！
              </p>
              <TextField
                onChange={handleReproduceDescInput}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
          </>
        )
      }
      { props.issueType === '平台功能許願' && (
        <>
          <Grid item xs={12}>
            <p>需求描述*</p>
            <p style={titleDescStyle}> 
              為什麼會想要這個功能？在什麼情境下會使用它？
            </p>
            <TextField
              // onChange={handleReproduceDescInput}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <p>操作方式</p>
            <p style={titleDescStyle}> 
              如果有這功能，理想中它會是怎麼操作呢？
            </p>
            <TextField
              // onChange={handleReproduceDescInput}
              fullWidth
              multiline 
              rows={4}
              variant="outlined"
            />
          </Grid>
       </>
        )
      }
  </>
  )
}

export default IssueDescInput