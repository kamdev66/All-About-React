import React,{useState} from 'react'

function BasicForm() {
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState("");
    function getFormData(e){
        e.preventDefault();
        console.log(name,tnc,interest);
    }
  return (
    <div>
        <h1>Handle form in react</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
            <option>Select option</option>
                <option>Maths</option>
                <option>Science</option>
                <option>Grammar</option>
            </select><br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span><br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BasicForm