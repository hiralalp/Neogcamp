import "./styles.css";
import {useState} from "react"
function App() {
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState("password");
  const [btnText, setBtnText] = useState("Show");

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

const handleClick=(e)=>{
  if(btnText==="Show"){
    setBtnText("Hide")
    setStatus("text")
  }
    
  else{
    setBtnText("Show")
    setStatus("password")
  }
    
}

  

  

  return (
    <div className="App">
      <h2>Show and Hide Password</h2>
     
        <fieldset>
          <label>
            <p>Password :</p>
            <input type={status} name="name" onChange={handlePassword} />
          </label>
          <button onClick={handleClick}>{btnText}</button>
        </fieldset>
      
    </div>
  );
}


export default App