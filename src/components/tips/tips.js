import React, { useState, useEffect } from "react";
import DashButton from "../../assets/dashbutton";
import TipNode from "../../assets/tipnode";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Fetch tips initially
    fetchTips();

    // Listen for the custom event
    document.addEventListener('tipSubmitted', fetchTips);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('tipSubmitted', fetchTips);
    };
  }, []);

  const fetchTips = () => {
    fetch("/api/tips", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setTips(data);
      })
      .catch(error => {
        console.error('Error fetching tips:', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
      <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
        <h1 className="text-xl font-bold mb-2">Tips</h1>
        <div className="overflow-y-auto max-h-96">
          {tips.map((t, index) => (
            <TipNode key={index} user={t[0]} tip={t[1]} />
          ))}
        </div>
        <DashButton text="Back" redirect="/social" />
      </div>
    </div>
  );  
};

export default Tips;
