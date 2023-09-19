import React, { useState } from "react";
import DashButton from "../../assets/dashbutton";

const OneRepMax = () => {
  const [lift, setLift] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [result, setResult] = useState(null); // State for the result

  const handleLiftChange = (event) => {
    const inputValue = event.target.value;
    // use regular expressions to validate lift (decimal numbers okay)
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setLift(inputValue);
    }
  };

  const handleRepetitionsChange = (event) => {
    const inputValue = event.target.value;
    // use regular expressions to validate repetitions (integers only)
    if (/^\d*$/.test(inputValue)) {
    setRepetitions(event.target.value);
    }
  };

  const calculateOneRepMax = () => {
    // Calculate the one-rep max based on lift and repetitions
    const oneRepMax = parseFloat(lift) * (1 + 0.0333 *parseInt(repetitions));
    // (lift weight) * (1.0333 * reps)
    // Set the result in the state round to 3 decimal places
    const rounded = Math.round (oneRepMax * 1000) / 1000;
    setResult(rounded);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
      <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
        <h1 className="text-xl font-bold mb-2">OneRepMax</h1>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lift
          </label>
          <input
            type="text"
            value={lift}
            onChange={handleLiftChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Lift"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Repetitions
          </label>
          <input
            type="text"
            value={repetitions}
            onChange={handleRepetitionsChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Repetitions"
          />
        </div>
        
        {result !== null && (
          <div className="text-xl mb-2">
            The one-rep max is: {result} lbs. {/* Display the result here */}
          </div>
        )}
        <DashButton text="Calculate One-RepMax" action = {calculateOneRepMax} />
        <DashButton text="Back to Dashboard" redirect="/dashboard" />
      </div>
    </div>
  );
};

export default OneRepMax;
