import React from 'react';
import Uploader from './components/Uploader/UploadCSV'
import Leaderboard from './components/Rank Table/RankTable'
import classes from './App.module.css'
import { AuthContext } from './context/AuthContext'
import Layout from './containers/Layout'
//import "./App.css"



const App = (props) => {
  const authContext = React.useContext(AuthContext);
  return (
    <Layout>
  <div className={classes.App}>
      {authContext.isAuth? <Uploader />: null }
      <Leaderboard/>
      
    </div>
    </Layout>
  
   
  
  );
}

export default App;
