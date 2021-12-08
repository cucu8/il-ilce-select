import "./App.css";
import { useState } from "react";
import { iller } from "./data.js";
function App() {
  const [secilenIlindex, setSecilenIlIndex] = useState(0);
  const [secilenIl, setSecilenIl] = useState(iller[secilenIlindex].il);
  const [secilenIlce, setSecilenIlce] = useState("");

  console.log(secilenIl);
  console.log(secilenIlce);

  const handlerSetIndex = (e) => {
    setSecilenIlce("");
    setSecilenIl(iller[e.target.value].il);
    setSecilenIlIndex(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handlerSetIndex}>
        {iller.map((item, index) => (
          <option value={index} key={index}>
            {item.il} - {item.plaka}
          </option>
        ))}
      </select>
      <hr />
      <select onChange={(e) => setSecilenIlce(e.target.value)}>
        {iller[secilenIlindex].ilceleri.map((ilce) => (
          <option value={ilce} key={ilce}>
            {ilce}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
