import React, { useState, useContext } from "react";
import { SessionInfo } from "../context/context";

const Signup = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
    }

    const validate = () => {
        if (password == repeatPassword) {
            fetch("/api/signup", {
                method : "POST",
                cache : "no-cache",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(`{"username" : "${username}", "password" : "${password}"}`)
            }).then(
                res => {
                    if(res.redirected) {
                        window.location.href = res.url;
                    }
                }
            )
        }
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray">
            <div className="w-full max-w-xs bg-pf-white rounded-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1>Sign up for Progression Fit</h1>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsername}/>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Username" value={password} onChange={handlePassword}/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Repeat Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="repeatpassword" type="password" placeholder="Password" value={repeatPassword} onChange={handleRepeatPassword} />
                    </div>
                    {password != repeatPassword && <h1>Passwords must match</h1>}
                    <div className="flex items-center justify-between">
                    <button className="bg-pf-mint font-bold py-2 px-4 rounded" type="button" onClick={validate}>
                        Sign Up
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;