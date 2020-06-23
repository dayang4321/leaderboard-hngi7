import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core'


const Layout = props => {


        return (
            <div>
                <AppBar position="fixed" color="primary">
                  <Toolbar>
                    <Typography variant="h6">
                      HNGi7 LeaderBoard
                    </Typography>
                  </Toolbar>
                </AppBar>
                <main
                  //  className={classes.Content}
                >

            {props.children}
            </main>
        
            </div>
              
          

        )
    

}




export default Layout