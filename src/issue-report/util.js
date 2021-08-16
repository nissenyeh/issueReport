const detect = require('detect.js');

export const detectDevice = function(){
  const ua = detect.parse(navigator.userAgent);
  const currentBrowser = ua.browser.family + ' (版本:' + ua.browser.version + ')';
  const currentOS = ua.os.name;
  const currentDevice = ua.device.type;
  console.log(currentBrowser)
  console.log(currentOS)
  console.log(currentDevice)
}

