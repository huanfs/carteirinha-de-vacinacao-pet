import React from "react";

import {StyledInput} from "@styles/styledInput";

function Input({type, placeholder, action}){
    return(
        <StyledInput
            type={type}
            placeholder={placeholder}
            onChange={(event)=>{action && action(event.target.value)}}
        />
    )
};

export default Input;