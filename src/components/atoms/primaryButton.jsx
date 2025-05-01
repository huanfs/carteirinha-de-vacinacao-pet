import React from "react";

import {StyledPrimaryButton} from "@styles/styledPrimaryButton.js";

function PrimaryButton({value, size, action}){
    return(
        <StyledPrimaryButton
            type="button"
            value={value}
            style={{width: size ? size : "200px"}}
            onClick={(event)=>{action ? action(event.target.value) : null}}
        />
    )
};

export default PrimaryButton;