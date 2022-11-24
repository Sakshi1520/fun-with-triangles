import React, { useState } from "react";

function Area() {
  const [side1, setSide1] = useState();
  const [side2, setSide2] = useState();
  const [side3, setSide3] = useState();
  const [result, setResult] = useState("");

  function getResult() {
    if (side1 && side2 && side3) {
      if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        setResult("Length of side must be a positive value");
      } else {
        const area = calculateArea();
        setResult("The area is: " + Math.round(area * 100) / 100);
      }
    } else {
      setResult("Enter all values");
    }
  }

  function calculateArea() {
    const s = (+side1 + +side2 + +side3) / 2;
    const s1 = s - side1;
    const s2 = s - side2;
    const s3 = s - side3;
    const area = Math.sqrt(s * s1 * s2 * s3);
    return area;
  }

  return (
    <div className="content">
      <h1>Area of Triangle</h1>
      <h2>Enter the 3 sides of your triangle</h2>
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
      <div className="input-flex">
        <label htmlFor="side2">Side 3: </label>
        <input
          type="number"
          name="side2"
          onInput={(e) => setSide3(e.target.value)}
          required
        />
      </div>
      <button className="link link-primary" onClick={getResult}>
        Check
      </button>
      <h2>{result}</h2>
    </div>
  );
}

export default Area;
