export const problemCategory = {
  "帳號問題(無法登入/忘記密碼/登入後資料異常)": 
    [
      "【教育雲】忘記密碼",
      "【教育雲】帳號無法登入",
      "【教育雲】帳號登入後，發現是其他人的名字",
      "【Google/Facebook】忘記密碼",
      "【Google/Facebook】無法登入",
      "【Google/Facebook】未滿13歲的兒童無法註冊/登入均一",
      "【均一帳號/附屬帳號】忘記密碼",
      "【均一帳號/附屬帳號】無法登入",
      "其他"
    ],
  "題目問題(敘述/解題說明/答案)": 
    [
     "題目敘述/解題說明/答案有錯",
     "題目太難了",
     "讓題目設計更完善的修改建議",
     "解題說明不夠完整",
     "影片內插入習題內容有誤",
     "其他",
    ],
  "任務/班級相關問題":
    [
      "無法完成指派或接收任務",
      "班級討論區相關",
      "其他",
    ],
  "影片播放/習題操作問題":
    [
      "影片無法播放或顯示空白",
      "無法作答或無法送出習題答案",
      "題目發音有問題",
      "題目內的影片/圖片無法顯示",
      "其他",
    ],
  "精熟技能/升級/頭貼徽章問題":
    [
      "精熟技能、能量、升級相關問題",
      "頭貼或徽章問題",
      "其他",
    ], 
  "其他": [
    "其他",
  ]
}


const problemLoginHint = {
  "【教育雲】忘記密碼": [
    {
      "question": "是否知道忘記教育雲密碼，應該先跟教育雲聯絡？",
      "option1": "是",
      "option2": "否 (建議應該先跟教育雲聯絡)",
      "reference":      {
        "title": "教育雲忘記密碼",
        "link": "https://sso.cloud.edu.tw/pwd/forget",
      }
    },
  ],
  "【教育雲】帳號無法登入": [
    {
      "question": "是否確認教育雲「只有」在均一無法登入？",
      "option1": "是",
      "option2": "否 (建議先確認教育雲在其他服務是否也無法登入）",
    },
    {
      "question": "如果教育雲在其他服務也無法登入，是否有先聯絡教育雲？",
      "option1": "是",
      "option2": "否 (建議先聯絡教育雲）",
    },
  ],
  "【教育雲】帳號登入後，發現是其他人的名字": [
    {
      "question": "你有先閱讀下面這份文件，請老師/家長嘗試協助處理嗎？",
      "option1": "是",
      "option2": "否 (建議請老師/家長透過該份文件的步驟幫助學生處理該問題)",
      "reference":
      {
        "title": "登入教育雲端帳號後，發現是其他人的名字",
        "link": "https://drive.google.com/file/d/1HRS6t3Q_C-wAhZjqHp5Iacgts8-SM5_v/view",
      }
    },
  ],
  "【Google/Facebook】忘記密碼": [
    {
      "question": "是否知道忘記Google/Facebook帳號密碼，應該先跟Google/Fb聯絡？",
      "option1": "是",
      "option2": "否（建議應該要先聯絡Google/Facebook）",
    },
  ],
  "【Google/Facebook】無法登入": [
    {
      "question": "是否確認Google/Fb「只有」在均一無法登入？",
      "option1": "是",
      "option2": "否 (請先確認Google/Fb是否可以單獨登）",
    },
    {
      "question": "如果Google/Fb在其他服務也無法登入，是否有先聯絡Google/Fb？",
      "option1": "是",
      "option2": "否 (建議先聯絡Google/Fb）",
    },
  ],
  "【Google/Facebook】未滿13歲的兒童無法註冊/登入均一": [
    {
      "question": "是否閱讀過以下這份文件，了解google對兒童帳號的限制？",
      "option1": "是",
      "option2": "否（請先閱讀該份文件）",
      "reference":
      {
        "title": "為什麼未滿13歲的gogole兒童帳號無法登入均一",
        "link": "https://drive.google.com/drive/u/0/folders/1pyWGfaq4NxZ5d4mUf9ojnDnngntCJMEZ",
      }
    },
  ],
  "【均一帳號/附屬帳號】忘記密碼": [
    {
      "question": "是否知道可以請你的「密碼教師」幫助你更改密碼？",
      "option1": "是",
      "option2": "否（建議同時可以先聯絡你的密碼教師，幫助你更改密碼）",
    },
    {
      "question": "是否知道如果你有綁定信箱，可以透過「忘記密碼」重設密碼？",
      "option1": "是",
      "option2": "否（建議嘗試使用該功能）",
      "reference":
      {
        "title": "忘記密碼",
        "link": "https://www.junyiacademy.org/forgotpw",
      }
    },
  ]
}

const videoQuestionHint = {
  "影片無法播放或顯示空白": [
    {
      "question": "是否確認你的網路狀況順暢？",
      "option1": "是",
      "option2": "否 (建議先確認你的網路狀況)",
    },
    {
      "question": "是否嘗試把「個人資料設定」-「是否於均一關閉YouTube兒童帳號功能？」選項關閉？",
      "option1": "是",
      "option2": "否 (建議先嘗試關閉該選項)",
    }
  ],
}


export const problemHint = {
  ...problemLoginHint,
  ...videoQuestionHint,
}

