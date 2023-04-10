import React from "react";

import DashButton from "../../assets/dashbutton";

const Dashboard = () => {
    return (
        <div className="flex flex-row min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-white px-5 py-5 rounded-md">
                <h1 className="text-pf-gray font-bold pb-5 text-xl">Dashboard</h1>
                <DashButton text="Health Info" redirect="/healthinfo" />
                <DashButton text="Workout" redirect="/workout" />
                <DashButton text="Track Progress" redirect="/progress" />
                <DashButton text="Social" redirect="/social" />
            </div>
        </div>
    );
}

export default Dashboard;