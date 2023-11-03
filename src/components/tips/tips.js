import React, { useState, useEffect } from "react";

import DashButton from "../../assets/dashbutton";

const Tips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("/api/tips", {
            method : "GET",
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data);
                setTips(data);
            }
        );
    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
            <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
                <h1 className="text-xl font-bold mb-2">Tips</h1>
                <div>
                    {/* Fields go here */}
                </div>
                <DashButton text="Back" redirect="/social" />
            </div>
        </div>
    );
}

export default Tips;