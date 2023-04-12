import React, {useState} from "react";

import DashButton from "../../assets/dashbutton";

const HealthInfo = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
    
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Health Info</h1>
                <div>
                    <div className="flex flex-col mb-2">
                <label className="text-xl mb-2">
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <label className="text-xl mb-2">
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
          </div>
                    {/* Fields go here */}
                    <h1 className="text-xl mb-2">Steps today: </h1>
                    <h1 className="text-xl mb-2">Goal Steps: </h1>
                    <h1 className="text-xl mb-2">Steps to Goal: </h1>
                    <h1 className="text-xl mb-2">Heartrate Current: </h1>
                    <h1 className="text-xl mb-2">Resting Heartrate: </h1>
                    <h1 className="text-xl mb-2">Username: {username} </h1>
                    <h1 className="text-xl mb-2">Password: {password} </h1>
                </div>
                <DashButton text="Sync" onClick={() => alert(`Username: ${username}\nPassword: ${password}`)} />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
};

export default HealthInfo;