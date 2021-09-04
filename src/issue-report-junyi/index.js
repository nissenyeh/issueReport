import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Grid, IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/Warning';

import HintRemider from './components/HintRemider.js';
import RoleSelector from './components/RoleSelector.js';
import UserIdInput from './components/UserIdInput.js';
import IssueTypeSelector from './components/IssueTypeSelector.js';
import CategorySelector from './components/CategorySelector.js';
import Screenshot from './components/Screenshot.js';
import OtherUserDevice from './components/OtherUserDevice.js';
import EmailInput from './components/EmailInput.js';
import IssueDescInput from './components/IssueDescInput.js';
import PhoneNumberInput from './components/PhoneNumberInput.js';
import AllowedDebugSelector from './components/AllowedDebugSelector.js';
import { description }from './style/styles';

import { checkPostDataIsValid } from './util/checkValid';
// import { detectCurrentStatus } from './util/detect'
import { getJSON, usePostGitlab } from './hooks/postGitlab'
import { problemHint } from './data/problemHint'

const Reporter = ({
  isFromReportPage
}) => {
  // initial User State
  const initialUserData = {
    isLogin: false, // 是否登入
    userId: '', // 帳號ID
    nickname: '', 
    email: '', // 聯絡信箱
    phoneNumber:'', // 聯絡號碼
    role: '', // 角色（學生, 老師, 家長, 訪客）
    isOtherUserDevice: null, // 是否問題發生在他人設備
    currentBrowser:'',
    currentOS: '',
    currentDevice: '',
    otherBrowser: '',
    otherOS: '',
    otherDevice: '',
  }

  // initial Peport State
  const initialReportInfo = {
    issueType: '', // 回報類型
    category: '', // 問題大分類
    subCategory: '', // 問題小分類
    image: '', // 畫面截圖
    issueProblemDesc: '', // 問題描述
    issueProblemReproducibleWay: '', // 問題重現方式
    issueProductWishDesc: '', // 產品許願描述
    issueProductWishIdeaUseWay: '', // 理想產品使用方式
    problemQid: '', // 有問題的題目的 qid
    problemCoverRange: '', // 有問題的 Exercise cover_range
    reportURL: '', // 回報時的頁面連結
    isAllowedDebug: null,
  }

  // Initial  Error State
  const initialErrorState = {
    emailError: false,
    roleError: false,
    issueTypeError: false,
    categoryError: false,
    subCategoryError: false,
    userIdError: false,
    issueProblemDescError: false,
    issueProductWishDescError: false,
    isOtherUserDeviceError: false,
    otherBrowserError: false,
    otherOSError: false,
    otherDeviceError: false,
    isAllowedDebugError: false,
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userState, setUserState] = useState(initialUserData);
  const [reportInfo, setReportInfo] = useState(initialReportInfo);
  const [errorState, setErrorState] = useState(initialErrorState);
  const hints = problemHint[reportInfo.subCategory]
  const { mutate: postToGitlab, data, error, isError, isSuccess, isPaused }= usePostGitlab()

  function getUserStateManager(type){
    return (data) => {
      const value = { ...userState }
      value[type] = data
      return setUserState(value)
    }
  }

  function getReportInfoManager(type){
    return (data) => {
      const value = { ...reportInfo }
      value[type] = data
      return setReportInfo(value)
    }
  }

  function checkIsValid(){
    const errorState =  { ...initialErrorState }
    const { newErrorState, isValid } = checkPostDataIsValid({ errorState, userState, reportInfo })
    setErrorState(newErrorState)
    return isValid
  }

  // 非環境無法執行
  // function getCurrentStatus(){
  //   const {userInfo:initUserInfo, reportInfo:initReportInfo} = detectCurrentStatus()
  //   setUserState({...userState, ...initUserInfo})
  //   setReportInfo({...reportInfo, ...initReportInfo})
  // }

  function handleOnclick(){
    if(!checkIsValid()){
      return
    }
    const json = getJSON({reportInfo, userState})
    postToGitlab(json)
    setIsSubmitted(true)
  }

  // useEffect(() => {
  //   getCurrentStatus()
    
  // },[])
  
  return (
    <Container>
      <Grid container spacing={3}>
        {!isSubmitted && (
            <>
              <Grid item xs={12}>
                <h1> 問題回報 </h1>
                <br/>
                <p style={description}>
                  親愛的使用者你好，謝謝你願意花時間告訴我們使用平台過程遇到的狀況。請盡量使用友善溝通的方式表達你的問題。祝學習愉快！
                </p>
              </Grid>
              <IssueTypeSelector
                setIssueType={getReportInfoManager('issueType')}
                issueTypeDefaultValue={reportInfo.issueType}
                isError={errorState.issueTypeError}
              />

              <RoleSelector
                isError={errorState.roleError}
                setRole={getUserStateManager('role')}
              />

              <EmailInput
                emailDefaultValue= {userState.email}
                setEmail={getUserStateManager('email')}
                isError={errorState.emailError}
              />

              <PhoneNumberInput
                setPhoneNumber={getUserStateManager('phoneNumber')}
              />

              {reportInfo.issueType === "問題回報" && (
                <CategorySelector
                  category={reportInfo.category}
                  categoryDefaultValue={reportInfo.category}
                  isCategoryError={errorState.categoryError}
                  subCategory={reportInfo.subCategory}
                  setCategory={getReportInfoManager('category')}
                  isSubCategoryError={errorState.subCategoryError}
                  setSubCategory={getReportInfoManager('subCategory')}
                />
              )}

              { hints && <HintRemider hints={hints}/> }

              {reportInfo.issueType === "問題回報" && (
                  <>

                    <OtherUserDevice
                      isOtherUserDevice={userState.isOtherUserDevice}
                      setIsOtherUserDevice={getUserStateManager('isOtherUserDevice')}
                      isOtherUserDeviceError={errorState.isOtherUserDeviceError}
                      setBrowser={getUserStateManager('otherBrowser')}
                      setDevice={getUserStateManager('otherDevice')}
                      setOS={getUserStateManager('otherOS')}
                      isOtherBrowserError={errorState.otherBrowserError}
                      isOtherOSError={errorState.otherOSError}
                      isOtherDeviceError={errorState.otherDeviceError}
                    />


                    {
                      (!userState.isLogin || userState.isOtherUserDevice) && (
                        <UserIdInput
                          isError={errorState.userIdError}
                          setUserId={getUserStateManager('userId')}
                        />
                      )
                    }

                    <AllowedDebugSelector
                      setIsAllowedDebug={getReportInfoManager('isAllowedDebug')}
                      isAllowedDebugError={errorState.isAllowedDebugError}
                    />

                  </>
                )
              }

              <IssueDescInput
                issueType={reportInfo.issueType}
                problemCategory={reportInfo.issueType === "問題回報" ? reportInfo.category: null}
                problemSubCategory={reportInfo.issueType === "問題回報" ? reportInfo.subCategory: null}
                issueProblemDesc={reportInfo.issueProblemDesc}
                isIssueProblemDescError={errorState.issueProblemDescError}
                isProductWishDescError={errorState.issueProductWishDescError}
                setIssueProblemDesc={getReportInfoManager('issueProblemDesc')}
                setReproducibleWay={getReportInfoManager('issueProblemReproducibleWay')}
                setProductWishDesc={getReportInfoManager('issueProductWishDesc')}
                setProductWishIdeaUseWay={getReportInfoManager('issueProductWishIdeaUseWay')}
              />

              {reportInfo.issueType === "問題回報" && (
                  <Screenshot
                    isFromReportPage={isFromReportPage}
                    image={reportInfo.image}
                    setImage={getReportInfoManager('image')}
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
            </>
          )
        }

        { isSubmitted && (
            <>
              { isSuccess && (
                  <>
                    <Grid item xs={12}>
                      <h1> 謝謝您協助我們回報問題
                        <CheckCircleOutlineIcon />
                      </h1>
                    </Grid>
                    <Grid item xs={12}>
                      <p style={description}>我們已經收到您回報的問題，同時也將回報的內容寄到您的信箱。如果需要進一步資訊，我們會透過您所填寫的 E-mail 與您聯絡。</p>
                      <p style={description}>我們會儘速處理您所回報的問題，如果您有任何問題，歡迎利用 supportteam@junyiacademy.org 與我們聯絡，再次謝謝您幫忙我們回報平台的問題。 : )</p>
                    </Grid>
                  </>
                )
              }
              { isError && (
                  <>
                    <Grid item xs={12}>
                      <h1> 問題回報失敗
                        <WarningIcon />
                      </h1>
                    </Grid>
                    <Grid item xs={12}>
                      <p style={description}>請您稍候再嘗試回報此問題，或是您可以將的問題寄到 supportteam@junyiacademy.org，我們會儘速處理，謝謝您。</p>
                    </Grid>
                  </>
                )
              }
            </>
          )
        }
      </Grid>
    </Container>
  );
};

Reporter.propTypes = {
  isFromReportPage: PropTypes.bool.isRequired,
};


export default Reporter