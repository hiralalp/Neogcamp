import "./styles.css";
import {useState} from "react"
function App() {
  const [pass, setPass] = useState("");
 
  const [result, setResult] = useState("");

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    var re = /^[A-Za-z]+$/;
    if(re.test(pass))
       setResult('Good Password does not have number');
    else
      setResult('Password has a number');

  };

  return (
    <div className="App">
      <h2>Password should contain number</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Password :</p>
            <input type="password" name="name" onChange={handlePassword} />
          </label>
          
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}


export default App