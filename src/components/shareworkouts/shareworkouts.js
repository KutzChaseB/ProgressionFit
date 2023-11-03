import React from "react";

import DashButton from "../../assets/dashbutton";

const ShareWorkouts = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Shared Workouts</h1>
                <div>
                    {/* Fields go here */}
                </div>
                <DashButton text="Back" redirect="/social" />
            </div>
        </div>
    );
}

export default ShareWorkouts;