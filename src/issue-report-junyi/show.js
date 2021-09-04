import React from 'react';
import { render } from 'react-dom';
import IssueReporter from './IssueReporter';

const show = (container, payload) => {
  render(
    <>
      <IssueReporter isFromReportPage={payload.isFromReportPage} />
    </>,
    document.getElementById(container)
  );
};

export default { show };
