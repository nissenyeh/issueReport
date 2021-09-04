import { useMutation } from 'react-query';
import axios from 'axios';

const api = "/githubpost"

export const usePostGitlab = () => {
  return useMutation((data)=> {
    return axios.post(api, data).then((response) => response.data);
  })
};

export function getJSON(data){

  const {reportInfo, userState} = data

  const json = {
    // 使用者相關資料
    "user_email": userState.email,
    "user_role": userState.role, // todo: 開後端 API 欄位
    "user_optional_info": userState.phoneNumber,
    "user_id": userState.userId, // todo: 開後端 API 欄位
    "user_nickname": userState.nickname,
    "isNotCurrentDevice": userState.isOtherUserDevice,
    "current_browser": userState.currentBrowser,
    "current_os": userState.currentOS,
    "current_Device": userState.currentDevice,
    "other_device_browser": userState.otherBrowser,
    "other_device_os": userState.otherOS,
    "other_device_type": userState.otherDevice, 

    // 問題回報
    "img": reportInfo.image,
    "msgMajor": reportInfo.category,
    "msgMinor": reportInfo.subCategory,
    "issue_Desc": reportInfo.issueProblemDesc,
    "issue_producible_way": reportInfo.issueProblemReproducibleWay, // todo: 開後端 API 欄位
    "is_Problem": reportInfo.isProblem,
    "problem_Info": reportInfo.problemQid + reportInfo.problemCoverRange, // todo: 舊 code 移除後，刪除此欄位
    "problem_qid": reportInfo.problemQid, // todo: 開後端 API 欄位
    "problem_cover_range": reportInfo.problemCoverRange, // todo: 開後端 API 欄位
  
    // 產品許願
    "issue_product_wish_desc": reportInfo.issueProductWishDesc, // todo: 開後端 API 欄位
    "issue_product_wish_idea_use_way": reportInfo.issueProductWishIdeaUseWay, // todo: 開後端 API 欄位

    // 其他資訊
    "url": reportInfo.reportURL,
    "errorEventId": reportInfo.errorEventId,
    "allowDebug": reportInfo.isAllowedDebug,

    // todo: 即將刪除以下欄位
    "answerList": [],
    "isSlow": false,
    "junyi_network_result": null,
    "cloudfront_network_result": null,
  }

  return json
  
}

