import React from "react";
import {Link} from 'react-router-dom';

const DashButton = (props) => {
    return (
        <Link to={props.redirect}>
            <button onClick={props.action} className="bg-pf-white text-pf-gray py-2 mb-2 px-4 border-b-4 border-pf-mint rounded hover:bg-pf-mint transition w-[300px]">
                {props.text}
            </button>
        </Link>
    );
}

export default DashButton;