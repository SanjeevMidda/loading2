import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  setInterval(() => setStatus(!status), 1000);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div className={status ? "block" : "move block"}></div>
    </div>
  );
}

export default App;
