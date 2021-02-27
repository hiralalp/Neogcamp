import "./styles.css";
import { useState } from "react";
import Button from "./components/Button"
function App() {
  const [txtSize, setTxtSize] = useState(8);
  const [selectValue, setSelectValue] = useState("Arial");
  const [color, setColor] = useState("#000");
  const [css, setCSS] = useState("");
  const handleChange = (e) => {
    setSelectValue(e.target.value)
  };
  const handleColor = (e) => {
    setColor(e.target.value)
  };
const increment=()=>{
  setTxtSize(txtSize=>txtSize*2)

}
const decrement=()=>{
  setTxtSize(txtSize=>txtSize/2)

}
const getCSS=()=>{
setCSS(`{
        font-size:${txtSize}px,
        color:${color},
font-family:${selectValue},
        }`)
}
  return (
    <div className="App">
      <label>Enter Text : </label>
      <br />
      <textarea
        type="textarea"
        name="textValue"
        style={{ height: "100px", width: "97%",fontSize:`${txtSize}px`,fontFamily:`${selectValue}` ,color:`${color}`}}      
      />
<div>
<Button color="green" text="+" onClick={increment} />
<Button color="green" text="-" onClick={decrement} />
<input type="color"  name="favcolor" onChange={handleColor}/>
<select value={selectValue} onChange={handleChange}>
            <option value="serif">serif</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Helvetica">Helvetica</option>
          </select>
          <Button color="orange" text="Get CSS" onClick={getCSS} />
</div><br/><br/>
<div>The CSS will be :<br/><br/>{css}</div>
      

    </div>
  );
}

export default App;
