import React, { useContext, useEffect, useState } from "react";
import { SessionInfo } from "../context/context";

import DashButton from "../../assets/dashbutton";

const Dashboard = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [randomTip, setRandomTip] = useState("Loading Tip...");

    const signOut = () => {
        setSessionInfo({
            "id" : 0,
            "username" : "",
        })
    };

    useEffect(() => {
        fetch("/api/randomtip", {
            method : "GET",
        }).then(
            res => res.json()
        ).then(
            data => {
                setRandomTip(data["tip"]);
            }
        );
    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <h1 className="pb-8 text-xl max-w-sm">{randomTip}</h1>
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