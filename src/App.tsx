import React, { useState } from "react";
import "./App.css";

import * as cell_types_json from "./Calculator/celltypes.json";

import { Calculator } from "./Calculator/Calculator";
import { CellType } from "./Calculator/CellType";

import PackRow from "./PackRow";

const App: React.FC = () => {
  const cell_types: CellType[] = cell_types_json.cell_types;
  const calc = new Calculator();

  // DIY electrinc motorcycyle 72v
  var ebikePacks = [
    calc.FindPack(0),
    calc.FindPack(1),
    calc.FindPack(3),
    calc.FindPack(21),
    calc.FindPack(22),

    calc.FindPack(19),
    calc.FindPack(17),
    calc.FindPack(18),
    calc.FindPack(20),

    calc.FindPack(5),
    calc.FindPack(15),
    calc.FindPack(16),

    calc.FindPack(6),
    calc.FindPack(7),

    calc.FindPack(9),
    calc.FindPack(10)
  ];
  var packs = ebikePacks;

  // 72v
  // var packs = [findPack(12), findPack(13), findPack(14)];

  // tesla packs
  // var packs = [findPack(0), findPack(1), findPack(2), findPack(3)];

  let [selectedType, updateSelectType] = useState(7);
  const cellType = cell_types[selectedType];

  let packComparisons = calc.ComparePacksForCellType(packs, cellType);

  return (
    <div className="App">
      <header className="App-header">
        <select
          value={selectedType}
          onChange={changedToType =>
            updateSelectType(parseInt(changedToType.currentTarget.value))
          }
        >
          {cell_types.map((type, index) => (
            <option value={index} key={index}>
              {type.name}, ${type.price} per cell
            </option>
          ))}
        </select>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>Pack Name</td>
              <td>modules</td>
              <td>in series</td>
              <td>in parallel</td>
              <td>total cells</td>
              <td>total price</td>
              <td>volts</td>
              <td>Ah</td>
              <td>kWh</td>
              <td>A</td>
            </tr>
            {packComparisons.map((details, index) => (
              <PackRow key={index} pack={details} />
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
