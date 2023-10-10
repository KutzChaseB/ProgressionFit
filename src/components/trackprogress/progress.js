import React, { useState, useEffect, useContext } from "react";
import { SessionInfo } from "../context/context";
import DashButton from "../../assets/dashbutton";

const Progress = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [workoutList, setWorkoutList] = useState([["", ""], ["Test", "Test"], ["Test 2", "Test 2"]]);
    const [selectedWorkout, setSelectedWorkout] = useState("");
    const [graphUrl, setGraphUrl] = useState("")


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
    }, []);

    const handleSelectedWorkoutChange = (event) => {
        setSelectedWorkout(event.target.value);
    };

    const generateGraph = () => {
        setGraphUrl(encodeURI(`/api/monitor_progress?user_id=${sessionInfo["id"].toString()}&exercise_name=${selectedWorkout}`));
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Track Progress</h1>
                <div>
                    <select value={selectedWorkout} onChange={handleSelectedWorkoutChange}>
                        {workoutList.map((w) => <option value={w[0]}>{w[0]}</option>)}
                    </select>
                </div>
                <DashButton text="View Progress" action={generateGraph} />
                <img src={graphUrl}></img>
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
}

export default Progress;