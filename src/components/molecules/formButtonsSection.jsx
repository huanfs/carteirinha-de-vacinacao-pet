"use client";

import React from "react";

import PrimaryButton from "@atoms/primaryButton";

import {StyledFormButtonsSection} from "@styles/styledFormButtonsSection";

function FormButtonsSection(){
    return(
        <StyledFormButtonsSection>
            <PrimaryButton value="entrar"/>
            <PrimaryButton value="registrar"/>
        </StyledFormButtonsSection>
    )
};

export default FormButtonsSection;