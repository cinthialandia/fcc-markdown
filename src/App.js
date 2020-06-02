import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.css";

function App() {
  const [html, setHtml] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const defaultValue = `# Hello I am H1
## Hello I am H2
[Hello I am a link](www.cinthialandia.com)

\`I am inline code\`

\`\`\`
const name = "Cinthia!"
\`\`\`

- item 1
- item 2
- item 3

> Hello I am quote

![alt text](/img/cin.jpg "Logo Title Text 1")

**Hello I am bold**
    `;

    setValue(defaultValue);
    setHtml(marked(defaultValue));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    setHtml(marked(`${e.target.value}`));
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="editor-container">
        <h3 className="title">Editor</h3>
        <textarea
          value={value}
          id="editor"
          onChange={handleChange}
          type="text"
          name="name"
        />
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
