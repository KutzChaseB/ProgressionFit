/*import React, { useState, useContext, useEffect } from 'react';
import { SessionInfo } from "../context/context";
import DashButton from '../../assets/dashbutton';

const SubmitTip = () => {
    const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
    const [tip, setTip] = useState("");

    const submitHandler = () => {
        fetch("/api/tips", {
            method : "POST",
            cache : "no-cache",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                "user_id" : sessionInfo["id"],
                "tip" : tip
            })
        });
    };
    

    const handleTipChange = (event) => {
      setTip(event.target.value);
    };
  
    return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
        <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
          <h1 className="text-xl font-bold mb-2">Submit a Tip</h1>
          
          <form onSubmit={submitHandler}>
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Tip
                    </label>
              <textarea
                id="tip"
                name="tip"
                value={tip}
                onChange={handleTipChange}
                className="w-full"
              />
            </div>
            <DashButton text="Submit" type="submit" />
          </form>
          <DashButton text="Back" redirect="/social" />
        </div>
      </div>
    );
  };


export default SubmitTip;
*/
import React, { useState, useContext } from 'react';
import { SessionInfo } from '../context/context';
import DashButton from '../../assets/dashbutton';

const SubmitTip = () => {
  const { sessionInfo, setSessionInfo } = useContext(SessionInfo);
  const [tip, setTip] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('/api/tips', {
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

      if (response.ok) {
        // Assuming the server responds with a success status
        // You can handle the success, for example, redirect to the tips page
       // window.location.href = '/social/tips'; // Replace with your actual tips page URL
      } else {
        // error check
        console.error('Failed to submit tip');
      }
    } catch (error) {
      console.error('Error submitting tip:', error);
    }
  };

  const handleTipChange = (event) => {
    setTip(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-pf-gray text-pf-white">
      <div className="flex flex-col justify-center items-center bg-pf-field text-pf-gray px-5 py-5 rounded-md">
        <h1 className="text-xl font-bold mb-2">Submit a Tip</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Tip</label>
            <textarea
              id="tip"
              name="tip"
              value={tip}
              onChange={handleTipChange}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
          <DashButton text="Back" redirect="/social" />
        </form>

        
      </div>
    </div>
  );
};

export default SubmitTip;
