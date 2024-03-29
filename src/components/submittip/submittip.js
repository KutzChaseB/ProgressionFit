import React, { useState, useContext } from 'react';
import { SessionInfo } from '../context/context';
import { useNavigate } from "react-router-dom";
import DashButton from '../../assets/dashbutton';

const SubmitTip = () => {
  const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
  const [tip, setTip] = useState('');

  let navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
      const response = fetch('/api/tips', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          user_id: sessionInfo['id'],
          tip: tip,
        }),
      });
      navigate("/social");
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
      <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
        <h1 className="text-xl font-bold mb-2">Submit a Tip</h1>
            <textarea
              id="tip"
              name="tip"
              value={tip}
              onChange={handleTipChange}
              className="w-full mb-6 resize-none rounded-lg border border-pf-gray h-[100px] p-1"
              maxLength="100"
              placeholder="Enter tip here"
            />
        <DashButton text="Submit" action={submitHandler} />
        <DashButton text="Back" redirect="/social" />
        
      </div>
    </div>
  );
};

export default SubmitTip;
