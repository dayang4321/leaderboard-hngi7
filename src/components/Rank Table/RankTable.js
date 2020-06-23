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
        width: '200',
      }},
    { title: 'Username', field: 'username' },
       { title: 'Email', field: 'email'},
       { title: 'Points', field: 'points', },
    {
      title: 'track', field: 'track',
      lookup: { 1: 'Frontend', 2: 'Backend' , 3: 'Design',  4: 'Mobile' },
       },
      
    ]
    
    const editable = {
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
      }

  return (
    <MaterialTable style={{padding:'10px'}}
      title="The Board"
      columns={columns}
          data={dataState.data}

          options={{
            rowStyle: {
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: ' 0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
               
              
            }
          }}
         
      editable={props.isAuth? editable:null}
    />
  );
}

export default Leaderboard