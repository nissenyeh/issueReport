import './App.css';
import Reporter from './issue-report/index'
import Dialog from '@material-ui/core/Dialog';
import React, {useState} from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dialog onClick={handleClick} open={true}>
          <Reporter
            isFromReportPage={true}
            isLogin={true}
            nickname={"Nissen"}
          />
        </Dialog>
      </QueryClientProvider>  
    </>
  );
}

export default App;
