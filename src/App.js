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
      <div className="editor">
        <div className="editor-title">Editor</div>
        <textarea onChange={handleChange} type="text" name="name" />
      </div>
      <div className="previewer">
        <div className="prev-title">Previewer</div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}

export default App;
