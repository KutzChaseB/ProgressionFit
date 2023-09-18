import React, { useContext } from "react";
import { SessionInfo } from "../context/context";

import DashButton from "../../assets/dashbutton";

const Dashboard = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);

    const signOut = () => {
        setSessionInfo({
            "id" : 0,
            "username" : "",
        })
    };

    return (
        <div className="flex flex-row min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-white px-5 py-5 rounded-md">
                <h2 className="text-pf-gray font-bold pb-5 text-xl">Welcome to Progression Fit, {sessionInfo["username"]}</h2>
                <h1 className="text-pf-gray font-bold pb-5 text-xl">Dashboard</h1>
                <DashButton text="Health Info" redirect="/healthinfo" />
                <DashButton text="Workout" redirect="/workout" />
                <DashButton text="Track Progress" redirect="/progress" />
                <DashButton text="Social" redirect="/social" />
                <DashButton text ="One Rep Max" redirect="/onerepmax" />
                <DashButton text="Sign Out" action={signOut} />
            </div>
        </div>
    );
}

export default Dashboard;