import React, { useState, useEffect } from "react";

import DashButton from "../../assets/dashbutton";
import ShareWorkoutNode from "../../assets/shareworkoutnode";

const ShareWorkouts = () => {
    const [sharedWorkouts, setSharedWorkouts] = useState([]);

    useEffect(() => {
        fetch("/api/share_workout", {
            method : "GET",
        }).then(
            res => res.json()
        ).then(
            data => {
                setSharedWorkouts(data.reverse());
            }
        );
    }, []);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
          <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
            <h1 className="text-xl font-bold mb-2">Shared Workouts</h1>
            <div className="overflow-y-auto max-h-96">
              {sharedWorkouts.map((d) => (
                <ShareWorkoutNode
                  username={d[0]}
                  date={d[1]}
                  ename={d[2]}
                  sets={d[3]}
                  reps={d[4]}
                  weight={d[5]}
                  comment={d[6]}
                />
              ))}
            </div>
            <DashButton text="Back" redirect="/social" />
          </div>
        </div>
      );
      
}

export default ShareWorkouts;