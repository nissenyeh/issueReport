import React, { useEffect }from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid }from '@material-ui/core';
import { title, detail, requireSymbol } from '../style/styles'
import { descTemplate } from '../data/descTemplate';

const IssueDescInput = ({
  issueType,
  problemCategory,
  problemSubCategory,
  issueProblemDesc,
  isIssueProblemDescError,
  isProductWishDescError,
  setIssueProblemDesc,
  setReproducibleWay,
  setProductWishDesc,
  setProductWishIdeaUseWay
}) => {

  // 問題描述
  function handleProblemDescInput(event) {
    const input = event.target.value;
    setIssueProblemDesc(input);
  }

  // 問題重現方式
  function handleReproducibleWayInput(event) {
    const input = event.target.value;
    setReproducibleWay(input);
  }

  // 功能許願
  function handleProductWishDescInput(event) {
    const input = event.target.value;
    setProductWishDesc(input);
  }

  // 許願理想使用方式
  function handleProductWishIdeaUseWayInput(event) {
    const input = event.target.value;
    setProductWishIdeaUseWay(input);
  }

  useEffect(() => {
    let defaultValue = problemCategory && problemSubCategory && descTemplate[problemSubCategory] ? descTemplate[problemSubCategory].template: '';
    setIssueProblemDesc(defaultValue);
  }, [problemCategory, problemSubCategory])

  return (
    <>
      { issueType === '問題回報' && 
        (
          <>
            <Grid item xs={12}>
              <p style={title}>問題描述
                <span style={requireSymbol}>*</span>
              </p>
              <p style={detail}> 
                盡可能描述你遇到的問題，不要只是寫說「它壞掉了！」
              </p>
              <TextField
                onChange={handleProblemDescInput}
                error={isIssueProblemDescError}
                value={issueProblemDesc}
                helperText={isIssueProblemDescError && "請輸入問題描述（除了預設模板，至少10個字）"}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <p style={title}>問題重現方式</p>
              <p style={detail}> 
                如果能提供問題重現的步驟，可以幫助我們更快、更準確的找出問題發生的原因！
              </p>
              <TextField
                onChange={handleReproducibleWayInput}
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
          </>
        )
      }
      { issueType === '平台功能許願' && (
        <>
          <Grid item xs={12}>
            <p style={title}>
              需求描述
              <span style={requireSymbol}>*</span>
            </p>
            <p style={detail}> 
              為什麼會想要這個功能？在什麼情境下會使用它？
            </p>
            <TextField
              onChange={handleProductWishDescInput}
              error={isProductWishDescError}
              helperText={isProductWishDescError && "請輸入需求描述"}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <p style={title}>操作方式</p>
            <p style={detail}> 
              如果有這功能，理想中它會是怎麼操作呢？
            </p>
            <TextField
              onChange={handleProductWishIdeaUseWayInput}
              fullWidth
              multiline 
              rows={4}
              variant="outlined"
            />
          </Grid>
       </>
        )
      }
  </>
  )
}

IssueDescInput.propTypes = {
  issueType: PropTypes.string,
  problemSubCategory: PropTypes.string,
  isIssueProblemDescError: PropTypes.bool.isRequired,
  isProductWishDescError: PropTypes.bool.isRequired,
  setIssueProblemDesc: PropTypes.func.isRequired,
  setReproducibleWay: PropTypes.func.isRequired,
  setProductWishDesc: PropTypes.func.isRequired,
  setProductWishIdeaUseWay: PropTypes.func.isRequired,
};

export default IssueDescInput