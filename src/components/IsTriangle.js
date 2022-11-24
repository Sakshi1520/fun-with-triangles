import React, { useState } from "react";

function IsTriangle() {
  const [angle1, setAngle1] = useState();
  const [angle2, setAngle2] = useState();
  const [angle3, setAngle3] = useState();
  const [result, setResult] = useState("");

  function getResult() {
    if(angle1 && angle2 && angle3) {
      if(angle1 > 0 && angle2>0 && angle3>0) {
        const sum = +angle1 + +angle2 + +angle3;
        if (sum === 180) {
          setResult("Yes! It's is a Triangle");
        } else {
          setResult("Oops! It's not a Triangle");
        }
      }
      else {
        setResult("Angles of a triangle must have a positive value");
      }
    }
    else {
      setResult("Enter All Values");
    }
  }

  return (
    <div className="content">
      <h1>Is Triangles?</h1>
      <h2>Enter the 3 angles of your triangle</h2>
      <div className="input-flex">
        <label htmlFor="angle1">Angle1: </label>
        <input
          type="number"
          name="angle1"
          onInput={(e) => setAngle1(e.target.value)}
          required
        />
      </div>
      <div className="input-flex">
        <label htmlFor="angle2">Angle2: </label>
        <input
          type="number"
          name="angle2"
          onInput={(e) => setAngle2(e.target.value)}
          required
        />
      </div>
      <div className="input-flex">
        <label htmlFor="angle2">Angle3: </label>
        <input
          type="number"
          name="angle2"
          onInput={(e) => setAngle3(e.target.value)}
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

export default IsTriangle;
