import React,{useState} from "react";
export default function Arrayform(){
  const[formdata,setFormdata]=useState({})  
  const[result,setResult]=useState("")
  const[array,setArray]=useState([])

  const _handleEmail=(e)=>{
    setFormdata({...formdata, [e.target.className]:e.target.value})
  }
  const _handlePassword=(e)=>{
    setFormdata({...formdata, [e.target.className]:e.target.value})
  }
  // console.log("formdata",formdata)
 
 
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    setFormdata({
      emailid:"",pass:""
    })
     let text=formdata.emailid.replace("@gmail.com","!")
     let total="Hi " + text.charAt(0).toUpperCase()+text.slice(1);
    // formdata.email=total;
    //  console.log("formdata",total)
     setArray([...array,total])
    //  setFormdata({
    //   emailid:"",
    //   pass:""
    //  })
   
    
  }
  console.log("array",array)
 
return(
    <>
    <form >
    <label>E-mail id</label>
    <input type="email" className="emailid" onChange={_handleEmail}value={formdata.emailid} />
    <label>password</label>
    <input type="password" className="pass" onChange={_handlePassword} value={formdata.pass}/>
    <button onClick={handleSubmit}>submit</button>

    </form>
    {array.map((y)=>(
      <>
      <p>{y}</p>
      {/* <p>{y.pass}</p> */}
      {/* <p>{y.emailid}</p> */}
     </>
    )
    
    )}    
    </>
)
}


