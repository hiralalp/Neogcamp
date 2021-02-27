import "./styles.css";
import {useState} from "react"
import Button from "./components/Button"
import Helmet from 'react-helmet';
function App() {

  const [mode,setMode]=useState("We are in Light Mode")
  const [btnClass,setBtnClass]=useState("btn")
  const [btnText,setBtnText]=useState("Dark Mode")
  const [bg,setBg]=useState('background-color : #fff')
  const [txtColor,setTxtColor]=useState("#000")
  
  const handleOnClick=()=>{
    if(btnText==="Dark Mode"){
      setBtnText("Light Mode")
      setBtnClass("btnlight")
      setBg('background-color : #000')
      setTxtColor("#fff")
      setMode("We are in Dark Mode")
    }else{
      setBtnText("Dark Mode")
      setBtnClass("btn")
      setBg('background-color : #fff')
      setTxtColor("#000")
      setMode("We are in Light Mode")
    }
  }

  return (
    <div className="App">
      <Helmet bodyAttributes={{style:bg }}/>
      <h1 style={{color:txtColor}}>{mode}</h1>
      <Button text={btnText} className={btnClass} onClick={handleOnClick}/>
    </div>
  );
}

export default App
