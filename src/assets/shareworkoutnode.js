import React from "react";

const ShareWorkoutNode = (props) => {
    return(
        <div class="bg-pf-white rounded-lg mb-2 p-6 max-w-sm">
            <h1>{props.date}</h1>
            <h2>Submitted By: {props.username}</h2>
            <p>{props.ename} for {props.sets} sets of {props.reps}</p>
            <p>Notes: {props.comment}</p>
        </div>
    )
}

export default ShareWorkoutNode;