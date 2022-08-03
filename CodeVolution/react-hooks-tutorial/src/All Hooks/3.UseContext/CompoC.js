import React,{useContext} from "react";
import { UserContext,ChannelContext} from "./Starter";

function CompoC() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
  return (
  <div>
    CompoC<br/>
    User is : {user}<br/>
    Channel is : {channel}
  </div>
)}

export default CompoC;
