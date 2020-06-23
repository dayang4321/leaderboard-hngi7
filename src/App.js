import React from 'react';
import Uploader from './components/Uploader/UploadCSV'
import Leaderboard from './components/Rank Table/RankTable'
import classes from './App.module.css'


function App() {
  return (
    <div className={classes.App}>
      <Uploader />
      <Leaderboard/>
      
    </div>
  );
}

export default App;
