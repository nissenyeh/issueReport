import { descTemplate } from '../data/descTemplate';

function isValidEmail(value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(value).toLowerCase());
}

function isValidSelected(value) { // 有被選擇
  return value == true || value == false
}

function isValidRequired(value) {
  return !!value
}

function isValidRequiredWithLeast(value, minimumRequiredWord=10) { // 至少 X 個字
  return value.length >= minimumRequiredWord
}

export function checkPostDataIsValid(data) {

  let { errorState: newErrorState, userState, reportInfo } = data

  newErrorState['emailError'] = !isValidEmail(userState.email)
  newErrorState['issueTypeError']= !isValidRequired(reportInfo.issueType)

  if(!userState.isLogin){
    newErrorState['roleError'] = !isValidRequired(userState.role)
    newErrorState['userIdError'] = !isValidRequired(userState.userId)
  }

  if(reportInfo.issueType ==='問題回報'){
    newErrorState['categoryError'] = !isValidRequired(reportInfo.category)
    newErrorState['subCategoryError'] = !isValidRequired(reportInfo.subCategory)
    newErrorState['isOtherUserDeviceError'] = !isValidSelected(userState.isOtherUserDevice)
    newErrorState['isAllowedDebugError'] = !isValidSelected(reportInfo.isAllowedDebug)

    const minimumRequiredWord = reportInfo.subCategory && descTemplate[reportInfo.subCategory] ? descTemplate[reportInfo.subCategory]['minimumRequiredWord'] : 10
    newErrorState['issueProblemDescError'] = !isValidRequiredWithLeast(reportInfo.issueProblemDesc, minimumRequiredWord)
  }

  if(reportInfo.issueType ==='平台功能許願'){
    newErrorState['issueProductWishDescError'] = !isValidRequired(reportInfo.issueProductWishDesc)
  }

  if(userState.isOtherUserDevice){
    newErrorState['otherBrowserError'] = !isValidRequired(userState.otherBrowser)
    newErrorState['otherOSError'] = !isValidRequired(userState.otherOS)
    newErrorState['otherDeviceError'] = !isValidRequired(userState.otherDevice)
    newErrorState['userIdError'] = !isValidRequired(userState.userId)
  }

  const isValid = Object.keys(newErrorState).every((k) => !newErrorState[k])

  return { newErrorState, isValid }
}


