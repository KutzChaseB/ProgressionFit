import React from "react";
import {Link} from 'react-router-dom';
import ProgFitLogo from './ProgFitLogo.png';

const Login = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray">
            <img src={ProgFitLogo} alt="ProgFitLogo" width="200" height="200"/>
            <div className="w-full max-w-xs bg-pf-white rounded-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-between">
                    <Link to="/dashboard">
                        <button className="bg-pf-mint font-bold py-2 px-4 rounded" type="submit">
                            Log In
                        </button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;