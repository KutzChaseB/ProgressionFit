import React from "react";

import DashButton from "../../assets/dashbutton";

const HealthInfo = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <h1>Health Info</h1>
             <DashButton text="Back to Dashboard" redirect="/dashboard" />
        </div>
    );
}

export default HealthInfo;