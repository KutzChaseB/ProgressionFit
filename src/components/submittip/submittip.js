import React, { useState, useContext, useEffect } from 'react';
import { SessionInfo } from "../context/context";
import DashButton from '../../assets/dashbutton';

const SubmitTip = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [tip, setTip] = useState("");

    const submitHandler = () => {
        fetch("/api/tips", {
            method : "POST",
            cache : "no-cache",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                "user_id" : sessionInfo["id"],
                "tip" : tip
            })
        });
    };

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
        <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
            <h1 className="text-xl font-bold mb-2">Submit a Tip</h1>
            <div>
                {/* Fields go here */}
            </div>
            <DashButton text="Back" redirect="/social" />
        </div>
    </div>
    )
}

export default SubmitTip;