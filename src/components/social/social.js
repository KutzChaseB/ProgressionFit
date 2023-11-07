import React from "react";

import DashButton from "../../assets/dashbutton";

const Social = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Social</h1>
                <div>
                    
                </div>
                <DashButton text="Submit a Tip" redirect="/social/submittip" />
                <DashButton text="View Tips" redirect="/social/tips" />
                <DashButton text="View Shared Workouts" redirect="/social/sharedworkouts" />
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
}

export default Social;