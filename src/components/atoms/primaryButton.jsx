import React from "react";

import {StyledPrimaryButton} from "@styles/styledPrimaryButton.js";

function PrimaryButton({value, size, action}){
    return(
        <StyledPrimaryButton
            style={{width: size ? size : "200px"}}
            onClick={()=>{action ? action : null}}
        >
            {value}
        </StyledPrimaryButton>
    )
};

export default PrimaryButton;