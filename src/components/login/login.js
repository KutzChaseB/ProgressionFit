import React, { useState, useContext } from "react";
import { SessionInfo } from "../context/context";
import ProgFitLogo from './ProgFitLogo.png';

const Login = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const validate = () => {
        fetch("/api/login", {
            method : "POST",
            cache : "no-cache",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(`{"username" : "${username}", "password" : "${password}"}`)
        }).then(
            res => res.json()
        ).then(
            data => {
                setSessionInfo({
                    "id" : data["sessionId"],
                    "username" : data["username"]
                })
            }
        )
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray">
            <img src={ProgFitLogo} alt="ProgFitLogo" width="200" height="200"/>
            <div className="w-full max-w-xs bg-pf-white rounded-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsername}/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={handlePassword} />
                    {sessionInfo["id"] == -1 && <p className="text-red-500">Incorrect username or password</p>}
                    <p>Not a member? Sign up <a href="/signup">here</a></p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                    <button className="bg-pf-mint font-bold py-2 px-4 rounded" type="button" onClick={validate}>
                        Log In
                    </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Login;