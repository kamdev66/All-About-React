import React,{useState} from 'react'

function FormValidation() {
const [user,setUser]=useState("");
const [password,setPassword]=useState("");
const [userErr,setUserErr]=useState(false);
function loginHandle(e){
e.preventDefault();

}

function userHandler(e){
    let item=e.target.value;
    if(item.length<3){
        setUserErr(true);
    }else{
        setUserErr(false)
    }
    setUser(item);
}
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>
            <input type="text" placeholder='Enter User Id' onChange={userHandler}/>{userErr?<span>User Not valid</span>:null}
            <br/><br/>
            <input type="text" placeholder="Enter User Password" />
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default FormValidation