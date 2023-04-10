import React from "react";

import DashButton from "../../assets/dashbutton";

const Progress = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Track Progress</h1>
                <div>
                    {/* Fields go here */}
                </div>
                <DashButton text="Back to Dashboard" redirect="/dashboard" />
            </div>
        </div>
    );
}

export default Progress;