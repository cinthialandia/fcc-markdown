import React, { useState, Fragment } from "react";
import marked from "marked";
import "./App.css";

function App() {
  const [html, setHtml] = useState("");

  const handleChange = (e) => {
    setHtml(marked(`${e.target.value}`));
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="editor">
        <div>Editor</div>
        <textarea onChange={handleChange} type="text" name="name" />
      </div>
      <div className="previewer">
        <div>Previewer</div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}

export default App;
