import React, { useState, useEffect } from "react";

import DashButton from "../../assets/dashbutton";

const Workout = () => {
    const [workoutList, setWorkoutList] = useState([["",""],["Bench Press", "Chest"], ["Barbell Squats", "Legs"],]);
    const [lift, setLift] = useState("");
    const [repetitions, setRepetitions] = useState("");
    const [sets, setSets] = useState("");
    const [selectedWorkout, setSelectedWorkout] = useState("");

    useEffect(() => {
        fetch("/api/workouts", {
            method : "GET",
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setWorkoutList(data)
            }
        )
    }, [])
    const handleSetsChange = (event) => {
      const inputValue = event.target.value;
      // use regular expressions to validate repetitions (integers only) (3 numbers max)
      if (/^\d{0,2}$/.test(inputValue)) {
      setSets(inputValue);
      }
    };
    const handleLiftChange = (event) => {
        const inputValue = event.target.value;
        // use regular expressions to validate lift (decimal numbers okay) (6 numbers max)
        if (/^\d{0,4}\.?\d{0,2}$/.test(inputValue)) {
          setLift(inputValue);
        }
      };
    
      const handleRepetitionsChange = (event) => {
        const inputValue = event.target.value;
        // use regular expressions to validate repetitions (integers only) (3 numbers max)
        if (/^\d{0,3}$/.test(inputValue)) {
        setRepetitions(inputValue);
        }
      };

      const handleSelectedWorkoutChange = (event) => {
        setSelectedWorkout(event.target.value);
        console.log(event.target.value);
      };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Workout</h1>
                <div>
                <div>
                     {/* Fields go here */
                        <select
                          value = {selectedWorkout}
                          onChange = {handleSelectedWorkoutChange}>
                          {workoutList.map((w) => 
                           <option value = {w[0]}>{w[0]}</option>  

                          )}
                          
                      </select>
                    
                    
                    }
                     
           <label className="block text-gray-700 text-sm font-bold mb-2">
            Sets
          </label>
          <input
            type="text"
            value={sets}
            onChange={handleSetsChange}
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Sets"
          />
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
                </div>
                <DashButton text="+" action = {enterWorkOut} />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
   
      
}
const enterWorkOut = () => {
    // Calculate the one-rep max based on lift and repetitions
    //const oneRepMax = parseFloat(lift) * (1 + 0.0333 *parseInt(repetitions));
    // (lift weight) * (1.0333 * reps)
    // Set the result in the state round to 3 decimal places
    //const rounded = Math.round (oneRepMax * 1000) / 1000;
    //setResult(rounded);
   window.print();
  };

export default Workout;