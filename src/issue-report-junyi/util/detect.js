// const detect = require('detect.js');

// const detectDevice = function(){
//   const ua = detect.parse(navigator.userAgent);
//   const currentBrowser = ua.browser.family + ' (版本:' + ua.browser.version + ')';
//   const currentOS = ua.os.name;
//   const currentDevice = ua.device.type;
//   return {currentBrowser, currentOS, currentDevice}
// }

// // 是否在習題頁面進行回報
// const detectIsProblem = function(){             
//   let isProblem = window.NavSidebar && NavSidebar.isSinglePageEnabled() ? NavSidebar.isExerciseLink(window.location.href) : (typeof Exercises !== 'undefined');
//   let exerciseName = null
//   let problemID = null
//   if (isProblem) {
//       let framework = Exercises.getCurrentFramework();
//       exerciseName = Exercises.currentCard.get('exerciseName') 
//       problemID = framework === 'perseus' ? Exercises.PerseusBridge.getSeedInfo().problem_type : Khan.getSeedInfo().problem_type;
//   }
//   return {isProblem, exerciseName, problemID }
// }

// // 偵測回報者是否登入＆個人資訊
// const detectCurrentUser = function(){             
//   let profile = KA.getUserProfile();
//   let isLogin = profile ? true : false
//   let nickname = null
//   let email = null

//   if(isLogin){
//     nickname = profile.get('nickname')
//     email = profile.get('email')
//   }

//   return { isLogin, email, nickname }
// }

// // 偵測上一個 Setnry Error Event id
// const detectLastEventId = function(){             
//   let errorEventId = null
//   if (typeof Raven !== 'undefined' && Raven.lastEventId() !== undefined) {
//       errorEventId = Raven.lastEventId();
//   }
//   return { errorEventId }
// }


// export const detectCurrentStatus = function(){  
  
//   const { currentBrowser, currentOS, currentDevice } = detectDevice()
//   const { isProblem, exerciseName, problemID } = detectIsProblem()
//   const { isLogin, email, nickname  } = detectCurrentUser()
//   const { errorEventId } = detectLastEventId()

//   // userInfo format
//   let userInfo = {
//     isLogin: isLogin,
//     email: email,
//     nickname: nickname,
//     currentBrowser: currentBrowser,
//     currentOS: currentOS,
//     currentDevice: currentDevice,
//   }

//   // reportInfo format
//   let reportInfo = {
//     issueType : '問題回報',
//     // todo: 下一階段，應該是透過 isProblem 偵測是否要自動帶入
//     // issueType: isProblem ? '問題回報': null,
//     category: isProblem ? '題目問題(敘述/解題說明/答案)': null,
//     isProblem: isProblem,
//     problemID: isProblem ? problemID : null,
//     problemCoverRange: isProblem ? exerciseName : null,
//     reportURL: window.location.href,
//     errorEventId: errorEventId ? errorEventId : []
//   }

//   return { status, userInfo, reportInfo}
// }

