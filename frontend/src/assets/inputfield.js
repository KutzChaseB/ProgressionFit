import React from "react";

const InputField = (props) => {
    return (
        <input type="text" id="username" placeholder={props.ph} className="bg-pf-field"/>
    );
}

export default InputField;