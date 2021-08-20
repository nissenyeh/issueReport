import React, {useState, useEffect} from 'react';
import { Container, Button, Grid }from '@material-ui/core';
import HintRemider from './components/HintRemider.js';
import RoleSelector from './components/RoleSelector.js';
import AccountIDInput from './components/AccountIDInput.js';
import IssueTypeSelector from './components/IssueTypeSelector.js';
import CategorySelector from './components/CategorySelector.js';
import Screenshot from './components/Screenshot.js';
import OtherDevice from './components/OtherDevice.js';
import EmailInput from './components/EmailInput.js';
import IssueDescInput from './components/IssueDescInput.js';
import PhoneNumberInput from './components/PhoneNumberInput.js';

import { detectDevice } from './util/util'

import { usePostGitlab } from './hooks/postGitlab'
import {problemHint} from './util/problemHint'

// todo: 思考 pop up 的做法
const Reporter = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [issueType, setIssueType] = useState('');
  const [email, setEmail] = useState('');
  const [accountID, setAccountID] = useState('');
  const [role, setRole] = useState('');
  const [optionalContact, setOptionalContact] = useState('');
  const [issueDesc, setIssueDesc] = useState('');
  const [issueReproduceDesc, setReproduceDesc] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [image, setImage] = useState('');
  const [isOtherDevice, setIsOtherDevice] = useState(false);
  const [reportBrowser, setBrowser] = useState('');
  const [reportOS, setOS] = useState('');
  const [reportDevice, setDevice] = useState('');
  const [currentURL, setURL] = useState('');
  
  const hints = problemHint[subCategory]

  // const postToGitlab = usePostGitlab()
  function detectUsingDevice(){
    const {currentBrowser, currentOS, currentDevice} = detectDevice()
    setBrowser(currentBrowser)
    setOS(currentOS)
    setDevice(currentDevice)
  }

  function getCurrentUrl(){
    setURL(window.location.href)
  }

  useEffect(()=>{
    detectUsingDevice()
    getCurrentUrl()
    setIsLogin(props.isLogin)
  },[])

  // todo: 思考做送出前檢查，還有 error handling
  function handleOnclick(){
  
    const json = {
      "img": image,
      "user_email": email,
      "reporter_role": role,
      "user_optional_info": optionalContact,
      "user_nickname":'',
      "msgMajor": category,
      "msgMinor": subCategory,
      "issue_Desc": issueDesc,
      "url": currentURL,
      "is_Problem":'',
      "problem_Info":'',
      "isNotCurrentDevice": isOtherDevice,
      "errorEventId":'',
      "current_browser": reportBrowser,
      "current_os": reportOS,
      "current_Device": reportDevice,
    }
  
    // postToGitlab.mutate(json)
  }
  
  //TODO: index.js:1 Warning: Each child in a list should have a unique "key" prop.

  // todo: index.js:1 Warning: React does not recognize the `fullWidth` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `fullwidth` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

  // todo: index.js:1 Warning: Each child in a list should have a unique "key" prop. Check the render method of `CategorySelector`
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1> 問題回報 </h1>
          <p>
            ・友善溝通，謾罵、輕視、辱罵等不友善行為，可能會被電子信件系統判斷為垃圾信件
          </p>
          <p>
            ・服務狀態：一般（預計回覆時間為 24-72 小時）
          </p>
          <p>
            ・服務時間：週一至週五 10:00 - 19:00
          </p>
        </Grid>
        <IssueTypeSelector
          setIssueType={setIssueType}
        />
        {!isLogin && (
          <RoleSelector
            role={role}
            setRole={setRole}
          />
        )}
        <EmailInput
          setEmail={setEmail}
        />
        <PhoneNumberInput
          setOptionalContact={setOptionalContact}
        />
        {issueType === "問題回報" && (
          <CategorySelector
            category={category}
            subCategory={subCategory}
            setCategory={setCategory}
            setSubCategory={setSubCategory}
          />
        )}

        { hints && <HintRemider hints={hints}/> }

        {(!isLogin && issueType === "問題回報") && (
          <AccountIDInput
            setAccountID={setAccountID}
          />
        )}

        <IssueDescInput
          issueType={issueType}
          setIssueDesc={setIssueDesc}
          setReproduceDesc={setReproduceDesc}
        />

        {issueType === "問題回報" && (
          <Screenshot
            isFromReportPage={props.isFromReportPage}
            image={image}
            setImage={setImage}
          />
         )
        }
        {issueType === "問題回報" && (
          <OtherDevice
            isOtherDevice={isOtherDevice}
            setIsOtherDevice={setIsOtherDevice}
            setBrowser={setBrowser}
            setDevice={setDevice}
            setOS={setOS}
          />
         )
        }
        <Grid item xs={12} style={{marginBottom: "20px"}}>
          <Button 
            variant="contained"
            color="primary"
            onClick={handleOnclick}>
              送出
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reporter