import "./styles.css";
import { useState } from "react";

function App() {
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [result, setResult] = useState("");
  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConPass(e.target.value);
    if (pass === e.target.value) {
      setResult("Password match");
    } else {
      setResult("password does not match");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pass === conPass) {
      setResult("Password match");
    } else {
      setResult("password does not match");
    }
  };

  return (
    <div className="wrapper">
      <h2>Enter and confirm password</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Password :</p>
            <input type="password" name="name" onChange={handlePassword} />
          </label>
          <label>
            <p>Confirm Password :</p>
            <input
              type="password"
              name="name"
              onChange={handleConfirmPassword}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
