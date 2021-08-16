

var dataObj = {
  img: $('#issueImg').prop('src'),
  user_email: $('#issueReportEmail').prop('value'),
  user_optional_info: $('#issueReportOptional').val(),
  user_nickname: $('.user-name').text(),
  current_browser: currentBrowser,
  current_os: currentOS,
  current_Device: currentDevice,
  msgMajor: msgMajor,
  msgMinor: msgMinor,
  answerList: answerList,
  issue_Desc: $('#issueDesc').val(),
  url: window.location.href,
  is_Problem: isProblem,
  problem_Info: problemInfo,
  isNotCurrentDevice: $('#isNotCurrentDevice').prop('checked'),
  isSlow: $('#isSlow').prop('checked'),
  other_device_browser: $('#other_device_browser').val(),
  other_device_os: $('#other_device_os').val(),
  other_device_type: $('#other_device_type').val(),
  junyi_network_result: junyiNetworkResult,
  cloudfront_network_result: cloudfrontNetworkResult,
  errorEventId: errorEventId,
  allowDebug: $('input:radio[name=debugRadio]:checked').val() === 'yes',
};

  //   $.ajax({
  //     url: '/githubpost',
  //     type: 'POST',
  //     data: JSON.stringify(dataObj),
  //     contentType: 'application/json',
  //     dataType: 'json',
  //     success: function () {
        
  //     },
  //     error: function () {
        
  //     },
  // });