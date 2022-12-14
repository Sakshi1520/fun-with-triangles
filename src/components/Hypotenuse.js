import { useState } from "react";

function Hypotenuse() {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [result, setResult] = useState("");

  function getResult() {
    if (side1 && side2) {
      if (side1 > 0 && side2 > 0) {
        const hypotenuse = Math.sqrt(side1 * side1 + side2 * side2);
        setResult("The Hypotenuse is: " + Math.round(hypotenuse * 100) / 100 + " units");
      } else {
        setResult("Length of side must be a positive value");
      }
    } else {
      setResult("Enter all values");
    }
  }

  return (
    <div className="content">
      <h1>Calculate Hypotenuse</h1>
      <div className="input-flex">
        <label htmlFor="side1">Side 1: </label>
        <input
          type="number"
          name="side1"
          onInput={(e) => setSide1(e.target.value)}
          required
        />
      </div>
      <div className="input-flex">
        <label htmlFor="side2">Side 2: </label>
        <input
          type="number"
          name="side2"
          onInput={(e) => setSide2(e.target.value)}
          required
        />
      </div>
      <button className="link link-primary" onClick={getResult}>
        Calculate
      </button>
      <h2>{result}</h2>
    </div>
  );
}

export default Hypotenuse;
