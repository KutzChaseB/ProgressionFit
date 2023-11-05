import React, { useState, useEffect, useContext } from "react";
import { SessionInfo } from "../context/context";
import DashButton from "../../assets/dashbutton";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import LogNode from "../../assets/lognode";



const Workout = () => {
  const { sessionInfo } = useContext(SessionInfo);

  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [workoutList, setWorkoutList] = useState([]);
  const [lift, setLift] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [sets, setSets] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState("");

    const getWorkoutHistory = () => {
      fetch("/api/workout_history", {
        method : "POST",
        cache : "no-cache",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({
          "user_id" : sessionInfo["id"]
        })
      }).then(
        res => res.json()
      ).then(
        data => {
          console.log(data);

          const reversedWorkoutHistory = [...data].reverse();
          // Update the state with the reversed data
          setWorkoutHistory(reversedWorkoutHistory);
        }
      )
    }
    useEffect(() => {
        fetch("/api/workouts", {
            method : "GET",
        }).then(
            res => res.json()
        ).then(
            data => {    
                data.unshift(["", ""]); 
                setWorkoutList(data);
            }
        );
        getWorkoutHistory();  
    }, []);

    const handleSetsChange = (event) => {
      const inputValue = event.target.value;
      // use regular expressions to validate repetitions (integers only) (2 numbers max)
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
      };

    const logWorkout = async () => {
      if (selectedWorkout != "" && sets != "" && repetitions != "" && lift != "") {
        fetch("/api/log_workout", {
          method : "POST",
          cache : "no-cache",
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify({
            "exercise_name" : selectedWorkout,
            "user_id" : sessionInfo["id"],
            "sets" : parseInt(sets),
            "reps" : parseInt(repetitions),
            "weight" : parseInt(lift)
          })
        }).then(
            res => {
              getWorkoutHistory();
            }
        );
      }
    };
    
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
          <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
              <h1 className="text-xl font-bold mb-2">Workout</h1>
            <div>
              <div>   
                  <select
                    value = {selectedWorkout}
                    onChange = {handleSelectedWorkoutChange}
                  >
                    {workoutList.map((w) => <option value={w[0]}>{w[0]}</option>)}
                  </select>                     
          
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
                    Repetitions
                  </label>
                  <input
                    type="text"
                    value={repetitions}
                    onChange={handleRepetitionsChange}
                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Repetitions"
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


              </div>
            </div>
  
          <DashButton text="+" action={logWorkout} />
          {
            workoutHistory.map((workout) => (
              <LogNode 
                date = {workout.date}
                exerciseName = {workout.exerciseName}
                reps = {workout.reps}
                sets = {workout.sets}
                weight = {workout.weight}
                logId = {workout.logId}
              />
            ))
          }
          <DashButton text="Back to Dashboard" redirect="/dashboard" />
      </div>
    </div>
    );
  };
  
  export default Workout;