import React, { Component } from 'react';
import Axios from 'axios';
import Dropzone from 'react-dropzone';
import csv from 'csv';

class App extends Component {

  onDrop(files) {

    this.setState({ files });

    var file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {

        var internList = [];

        for (var i = 1; i < data.length; i++) {
          const name = data[i][0];
          const username = data[i][1];
          const email = data[i][2];
          const points = data[i][3];
          const newUser = { "name": name, "username": username, "email": email, "points": points };
          internList.push(newUser);

         
        };

        Axios.put('https://hngi7-leaderboard.firebaseio.com/users.json', {...internList })
      });
    };

    reader.readAsBinaryString(file);
  }

  render() {

    // const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    // const fontSize = 5;

    return (
      <div >
        <br /><br /><br />
        <div className="dropzone">
          <Dropzone accept=".csv" onDropAccepted={this.onDrop.bind(this)}>            
          </Dropzone>
          <br /><br /><br />
        </div>
        <h2>Upload or drop your CSV file here.</h2>
      </div>
    )
  }
}

export default App;