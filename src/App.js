import React, { useState } from "react";
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
      <div className="editor-container">
        <h3 className="title">Editor</h3>
        <textarea id="editor" onChange={handleChange} type="text" name="name" />
      </div>
      <div className="previewer-container">
        <h3 className="title">Previewer</h3>
        <div
          id="preview"
          className="previewer"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}

export default App;
