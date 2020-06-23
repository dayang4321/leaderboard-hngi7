import React from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'


const Leaderboard = (props) => {
  const [dataState, setDataState] = React.useState({
    data: [ ],
  });
    
    React.useEffect(() => {
        let fetchedInterns = [];
      Axios.get('https://hngi7-leaderboard.firebaseio.com/users.json?orderBy="points"')
          .then(
              response => {
                  console.log(response.data)
                  fetchedInterns = response.data;
                  fetchedInterns.sort((a, b) => {
                    return b.points - a.points;
                  });
                  setDataState({data: fetchedInterns})


          }
      )
    }, [dataState])  
    

    
   const columns =  [
    { title: 'Name', field: 'name', headerStyle: {
        backgroundColor: '#039be5',
      } },
    { title: 'Username', field: 'username' },
       { title: 'Email', field: 'email'},
       { title: 'Points', field: 'points', },
    {
      title: 'track', field: 'track',
      lookup: { 1: 'Frontend', 2: 'Backend' , 3: 'Design',  4: 'Mobile' },
       },
      
  ]

  return (
    <MaterialTable
      title="Editable Example"
      columns={columns}
      data={dataState.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setDataState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setDataState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
              setTimeout(() => {
                
              resolve();
              setDataState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default Leaderboard