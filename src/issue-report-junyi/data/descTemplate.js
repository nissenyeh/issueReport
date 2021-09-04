const badgeAvatarTemplate = "頭貼/徽章名稱:\n問題描述:"

const opinIDtemplate = "縣市/區域/學校：\n縣市 OpenID 帳號：\n教育雲端帳號：\n把你遇到的問題告訴我們："

const googleFBtemplate = "您使用的登入方式(Google/FB)?：\n您的Google/FB帳號：\n把你遇到的問題告訴我們："

const accountTemplate = "您的帳號：\n把你遇到的問題告訴我們："

const minimumRequiredWord = 10

export const descTemplate = {
  "頭貼或徽章問題": {
    "template": badgeAvatarTemplate,
    "minimumRequiredWord": badgeAvatarTemplate.length + minimumRequiredWord
  },
  "【教育雲】忘記密碼": {
    "template": opinIDtemplate,
    "minimumRequiredWord": opinIDtemplate.length + minimumRequiredWord
  },
  "【教育雲】帳號無法登入": {
    "template": opinIDtemplate,
    "minimumRequiredWord": opinIDtemplate.length + minimumRequiredWord
  },
  "【教育雲】帳號登入後，發現是其他人的名字": {
    "template": opinIDtemplate,
    "minimumRequiredWord": opinIDtemplate.length + minimumRequiredWord
  },
  "【Google/Facebook】忘記密碼": {
    "template": googleFBtemplate,
    "minimumRequiredWord": googleFBtemplate.length + minimumRequiredWord
  },
  "【Google/Facebook】無法登入": {
    "template": googleFBtemplate,
    "minimumRequiredWord": googleFBtemplate.length + minimumRequiredWord
  },
  "【Google/Facebook】未滿13歲的兒童無法註冊/登入均一": {
    "template": googleFBtemplate,
    "minimumRequiredWord": googleFBtemplate.length + minimumRequiredWord
  },
  "【均一帳號/附屬帳號】忘記密碼": {
    "template": accountTemplate,
    "minimumRequiredWord": accountTemplate.length + minimumRequiredWord
  },
  "【均一帳號/附屬帳號】無法登入": {
    "template": accountTemplate,
    "minimumRequiredWord": accountTemplate.length + minimumRequiredWord
  }
}

