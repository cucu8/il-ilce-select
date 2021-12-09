import "./App.css";
import { useState } from "react";
import { iller } from "./data.js";
function App() {
  const [secilenIl, setSecilenIl] = useState("");
  const [secilenIlce, setSecilenIlce] = useState("");
  const [ilceListesi, setIlceListesi] = useState([]);

  console.log(secilenIl);
  console.log(secilenIlce);

  const handlerOnChange = (e) => {
    setSecilenIl(e.target.value);
    const ilceler = iller.find((item) => item.il === e.target.value);
    setIlceListesi(ilceler.ilceleri);
    setSecilenIlce("");
  };

  console.log(ilceListesi);
  return (
    <div className="App">
      <select onChange={handlerOnChange}>
        {iller.map((item, index) => (
          <option value={item.il} key={index}>
            {item.il} - {item.plaka}
          </option>
        ))}
      </select>
      <hr />
      {ilceListesi ? (
        <select onChange={(e) => setSecilenIlce(e.target.value)}>
          {ilceListesi.map((ilce) => (
            <option value={ilce} key={ilce}>
              {ilce}
            </option>
          ))}
        </select>
      ) : (
        "Henuz bir il secmediniz"
      )}

      <h1>secilen il : {secilenIl}</h1>
      <h1>secilen ilce : {secilenIlce}</h1>
    </div>
  );
}

export default App;
