import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import { Dialog,DialogTitle, DialogContent, IconButton } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query'
import Reporter from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const IssueReporter = ({
  isFromReportPage
}) => {
  const queryClient = new QueryClient()
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <QueryClientProvider client={queryClient}>
        {/* 彈窗版本 */}
        { !isFromReportPage && (
          <>
            <button onClick={handleOpen}>點我問題回報</button>
            <Dialog 
              data-html2canvas-ignore="true"
              open={open}>
              <DialogTitle disableTypography className={classes.root}>
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Reporter
                  isFromReportPage={isFromReportPage}
                /> 
              </DialogContent>
            </Dialog>
          </>
          )
        }
        {/* 獨立頁面版本（透過 /reprot 頁面進去) */}
        { isFromReportPage && (
            <Reporter
              isFromReportPage={isFromReportPage}
            />
          )
        }
      </QueryClientProvider>  
    </>
  );

};

IssueReporter.propTypes = {
  isFromReportPage: PropTypes.bool.isRequired,
};

export default IssueReporter;
 