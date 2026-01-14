import { useState } from "react";

function ClickEvent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const showMessage = (message) => {
    alert(message);
  };

  const showConsole = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <div className="container border p-4 my-2">
      <h3 className="text-black border-b-2 border-black mb-2">
        3. Handle button click events
      </h3>

      <button onClick={handleClick} className="btn-primary">
        Basic Click
      </button>

      <button
        onClick={() => showMessage("Hello React!")}
        className="btn-primary"
      >
        Click with Argument
      </button>

      <button onClick={showConsole} className="btn-primary">
        Console Event
      </button>
    </div>
  );
}

export default ClickEvent;
