import "./styles.css";
import { useState } from "react";
function App() {
  const [wordCount, setWordCount] = useState(0);
  const [txtColor, setTxtColor] = useState("#000");
  const handleChange = (e) => {
    let st = e.target.value;
    setWordCount(st.trim().split(/\s+/).length);
    if (wordCount > 5) {
      setTxtColor("red");
    }
  };
  return (
    <div className="App">
      <label>Enter Tweet : </label>
      <br />
      <textarea
        type="textarea"
        name="textValue"
        style={{ height: "100px", width: "97%" }}
        onChange={handleChange}
      />
      <h3 style={{ color: txtColor }}>{wordCount}/5</h3>
      <h2 style={{ color: txtColor }}>
        {wordCount > 5 ? "You have exceeded the words limit" : ""}
      </h2>
    </div>
  );
}

export default App;
