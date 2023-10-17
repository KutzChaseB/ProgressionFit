import React, { useState, useEffect, useContext } from "react";
import { SessionInfo } from "../context/context";
import DashButton from "../../assets/dashbutton";



const Workout = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);

    const [workoutHistory, setWorkoutHistory] = useState([]);
    const [workoutList, setWorkoutList] = useState([]);
    const [lift, setLift] = useState("");
    const [repetitions, setRepetitions] = useState("");
    const [sets, setSets] = useState("");
    const [selectedWorkout, setSelectedWorkout] = useState("");
    var dataArray=[
      {
        date: '2023-10-03'
       ,exerciseName: "Leg Press"
       ,reps: 10
       ,sets: 5
      },
      {
       date: '2023-10-02'
      ,exerciseName: "Arm Press"
      ,reps: 15
      ,sets: 4
     },
     {
       date: '2023-10-01'
      ,exerciseName: "Leg Press"
      ,reps: 4
      ,sets: 3
     },
     {
       date: '2023-09-20'
      ,exerciseName: "Push Up"
      ,reps: 10
      ,sets: 6
     }

     ]
     const htmlData = () => {
      // Initialize the HTML variable with the table header
      var html = "<table><thead><tr><th>Date</th><th>Workout</th><th>Reps</th><th>Sets</th></tr></thead><tbody>";
    
      for (var i = dataArray.length - 1; i >= 0; i--) {
        var workout = dataArray[i];
    
        // Add a table row for each workout
        html += `
          <tr>
            <td>${workout.date}</td>
            <td>${workout.exerciseName}</td>
            <td>${workout.reps}</td>
            <td>${workout.sets}</td>
          </tr>
        `;
      }
    
      // Close the table and add it to the "workoutHistory" element
      html += "</tbody></table>";
      var workoutHistory = document.getElementById("workoutHistory");
    
      if (workoutHistory) {
        workoutHistory.innerHTML = html;
      }
    };
      htmlData();
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
          setWorkoutHistory(data);
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
                
                <DashButton text="+" action = {logWorkout} />
                <div id="workoutHistory"></div>
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
   
      
}

export default Workout;