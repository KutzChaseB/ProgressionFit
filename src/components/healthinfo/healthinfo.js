import React from "react";

import DashButton from "../../assets/dashbutton";

const HealthInfo = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Health Info</h1>
                <div>
                    {/* Fields go here */}
                    <h1 className="text-xl font-bold mb-2">Steps today: </h1>
                    <h1 className="text-xl font-bold mb-2">Goal Steps: </h1>
                    <h1 className="text-xl font-bold mb-2">Steps to Goal: </h1>
                    <h1 className="text-xl font-bold mb-2">Heartrate Current: </h1>
                    <h1 className="text-xl font-bold mb-2">Resting Heartrate: </h1>
                    <h1 className="text-xl font-bold mb-2">Zone Minutes Today: </h1>
                </div>
                <DashButton text="Sync" redirect="/healthinfo" />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
}

export default HealthInfo;