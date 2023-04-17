import React, { useState, useEffect } from "react";

import DashButton from "../../assets/dashbutton";

const HealthInfo = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [garminInfo, setGarminInfo] = useState([{}]);

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleSync = () => {
      console.log(username + " " + password)
      // GET DATA FROM FLASK
      // fetch("http://127.0.0.1:5000/members", {
      //   "method": "GET",
      //   headers:{
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //   },
      // }).then(
      //   res => res.json()
      // ).then(
      //   data => {
      //     console.log(data);
      //   }
      // )

      // POST DATA TO FLASK
      fetch("http://127.0.0.1:5000/members",{
        method : "POST",
        cache : "no-cache",
        headers : {
          "content-type" : "application/json"
        },
        body:JSON.stringify(`{"username":"${username}", "password":"${password}"}`)
      }).then (
        res => res.json()
      ).then(
        data => console.log(data)
      )
    };
    
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
                    <h1 className="text-xl mb-2">Steps today: </h1>
                    <h1 className="text-xl mb-2">Goal Steps: </h1>
                    <h1 className="text-xl mb-2">Steps to Goal: </h1>
                    <h1 className="text-xl mb-2">Heartrate Current: </h1>
                    <h1 className="text-xl mb-2">Resting Heartrate: </h1>
                </div>
                <DashButton text="Sync" action={handleSync} />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
};

export default HealthInfo;