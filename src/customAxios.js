/** @format */

import axios from 'axios';

const fkeyMatch = /fkey=([^;]*)/.exec(document.cookie);
if (fkeyMatch) {
  const xsrfToken = fkeyMatch[1];
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers.common['X-KA-FKey'] = xsrfToken;
}

export default axios;
