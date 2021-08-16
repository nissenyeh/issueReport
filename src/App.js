import './App.css';
import Reporter from './issue-report/index'
import Dialog from '@material-ui/core/Dialog';
import React, {useState} from 'react';

function App() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };


  return (
    <>
      <Dialog onClick={handleClick} open={true}>
        <Reporter/>
      </Dialog>
    </>
  );
}

export default App;
