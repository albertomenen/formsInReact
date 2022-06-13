import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange() {
    setName(event.target.value);
  }

  function changeName(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={changeName}>Submit</button>
      </form>
    </div>
  );
}

export default App;
