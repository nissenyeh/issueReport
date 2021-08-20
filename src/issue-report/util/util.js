const detect = require('detect.js');

export const detectDevice = function(){
  const ua = detect.parse(navigator.userAgent);
  const currentBrowser = ua.browser.family + ' (版本:' + ua.browser.version + ')';
  const currentOS = ua.os.name;
  const currentDevice = ua.device.type;
  return {currentBrowser, currentOS, currentDevice}
}


export function isValidEmail(value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(value).toLowerCase());
}

