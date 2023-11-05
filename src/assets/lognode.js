import React, { useState, useContext } from "react";
import { SessionInfo } from "../components/context/context";
import DashButton from "./dashbutton";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const LogNode = (props) => {
    const { sessionInfo } = useContext(SessionInfo);

    const [isCommentModalOpen, setCommentModalOpen] = useState(false);
    const [workoutToShare, setWorkoutToShare] = useState(null);
    const [showCommentDialog, setShowCommentDialog] = useState(false);
    const [commentText, setCommentText] = useState("");

    const shareWorkout = (wid) => {
        setCommentModalOpen(true);
        setWorkoutToShare(wid);
    };

    const handleCommentChange = (event) => {
        const inputComment = event.target.value;
        
        if (inputComment.length <= 100) {
          setCommentText(inputComment);
        }
    };

    const shareWorkoutWithComment = () => {
        setShowCommentDialog(false);
        setCommentText("");
    };

    const handleSubmitComment = () => {
        fetch("/api/share_workout", {
            method : "POST",
            cache : "no-cache",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
              "user_id" : sessionInfo["id"],
              "workout_id" : workoutToShare,
              "comment" : commentText
            })
        })
        setCommentModalOpen(false);
    };

    return (
        <div class="bg-pf-light-gray rounded-lg mb-2 p-4">
            <h1>{props.date}</h1>
            <h1>{props.exerciseName} for {props.sets} sets of {props.reps}</h1>
            <h1>Weight: {props.weight}</h1>
            <DashButton text="Share" action={() => shareWorkout(props.logId)}/>
        
            {showCommentDialog && (
            <div className="comment-dialog">
              <textarea
                value={commentText}
                onChange={handleCommentChange}
                placeholder="Enter a comment (up to 100 characters)"
              />
              <button onClick={shareWorkoutWithComment}>Share</button>
              <button onClick={() => setShowCommentDialog(false)}>Cancel</button>
            </div>
            )}
            <Popup open={isCommentModalOpen} modal closeOnDocumentClick={false}>
                {(close) => (
                <div className="comment-modal">
                    <textarea
                    value={commentText}
                    onChange={handleCommentChange}
                    placeholder="Enter a comment (up to 100 characters)"
                    />
                    <div className="comment-modal-buttons">
                        <button onClick={handleSubmitComment}>Submit</button>
                        <button onClick={() => setCommentModalOpen(false)}>Cancel</button>
                    </div>
                </div>
                )}
            </Popup>
        </div>
    );
};

export default LogNode;