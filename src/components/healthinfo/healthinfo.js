import React, { useState, useEffect, useContext } from "react";
import { SessionInfo } from "../context/context";
import DashButton from "../../assets/dashbutton";



const HealthInfo = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [steps, setSteps] = useState(0);
    const [stepGoal, setStepGoal] = useState(0);
    const [stepsToGoal, setStepsToGoal] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [restingHr, setRestingHr] = useState(0);

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSync = () => {
      fetch("/api/garmin",{
        method : "POST",
        cache : "no-cache",
        headers : {
          "content-type" : "application/json"
        },
        body:JSON.stringify(`{"username":"${username}", "password":"${password}", "user_id":${sessionInfo["id"]}}`)
      }).then (
        res => res.json()
      ).then(
        data => {
          setSteps(data["steps"]);
          setStepGoal(data["stepGoal"]);
          setStepsToGoal(data["stepsToGoal"]);
          setCurrentHr(data["currentHr"]);
          setRestingHr(data["avgRestingHr"]);
        }
      )

    };
    
    const get_date = () => {
      const date = new Date();
      return (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0') + "-" + date.getFullYear();
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-4 rounded-md">
                <h1 className="text-xl font-bold mb-2">Health Info</h1>
                <form className="px-8 pt-6 pb-4 mb-1">
                    <h2 className="">Sign in to Garmin Connect</h2>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                    focus:shadow-outline" id="username" 
                    type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 
                    leading-tight focus:outline-none focus:shadow-outline" id="password" 
                    type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    </div>
                </form>
                <div className="mb-9 text-md">
                    <h1 className="text-xl mb-2">Date: {get_date()}</h1>
                    <h1 className="text-xl mb-2">Steps today: {steps}</h1>
                    <h1 className="text-xl mb-2">Goal Steps: {stepGoal}</h1>
                    <h1 className="text-xl mb-2">Steps to Goal: {stepsToGoal}</h1>
                    <h1 className="text-xl mb-2">Heartrate Current: {currentHr}</h1>
                    <h1 className="text-xl mb-2">Resting Heartrate: {restingHr}</h1>
                </div>
                <DashButton text="Sync" action={handleSync} />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
};

export default HealthInfo;