"use client";

import React from "react";

import {useRouter} from "next/navigation";

import {StyledFormularyButton} from "@styles/styledFormularyButton";

import {CreateNewUser} from "@services/createNewUser";

import {IsValidCredentialsFormat} from "@utils/isValidCredentialsFormat";

function FormularyButton({value, user}){

    const {push} = useRouter();

    return(
        <StyledFormularyButton type="button" onClick={()=>{IsValidCredentialsFormat(user.name, user.password, user.confirm, value, push)}}> 
            {value}
        </StyledFormularyButton>
    )
};

export default FormularyButton;