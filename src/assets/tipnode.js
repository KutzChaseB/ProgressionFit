import React from "react";

const TipNode = (props) => {
    return(
        <div class="bg-pf-white rounded-lg mb-2 p-6 max-w-sm break-all">
            <p>{props.tip}</p>
            <p>- {props.user}</p>
        </div>
    )
}

export default TipNode;