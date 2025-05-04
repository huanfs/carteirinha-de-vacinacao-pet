import React from "react";

import {StyledFormularyButton} from "@styles/styledFormularyButton";

import {CreateNewUser} from "@services/createNewUser";

function FormularyButton({value, user}){
    return(
        <StyledFormularyButton type="button" onClick={()=>{CreateNewUser(user.name, user.password, user.confirm)}}> 
            {value}
        </StyledFormularyButton>
    )
};

export default FormularyButton;