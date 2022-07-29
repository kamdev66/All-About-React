import React,{useState} from 'react'

function ConditionalRendering() {
    const [loggedIn,setLoggedIn]=useState(3);
  
    /* if(loggedIn){
        return (
            <div>
                  <h1>WELCOME KAMDEV</h1>
            </div>
          )
    }else{
        return (
            <div>
                  <h1>WELCOME Guest,bcoz You are not Logged In.</h1>
            </div>
          )
    }
*/
   
return(
    <div>
        {
            loggedIn===1?<h1>WelCome User 1</h1>:loggedIn===2?<h1>Welocome User 2</h1>:<h1>Welcome user 3</h1>
        }
    </div>
)
}

export default ConditionalRendering