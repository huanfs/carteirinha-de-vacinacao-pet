"use client";

import React from "react";

import useFormOption from "@store/useFormOption";

import useStatusMessage from "@store/useStatusMessage";

import Title from "@atoms/title";

import FormButtonsSection from "@molecules/formButtonsSection";

import Form from "@organisms/form";

import StatusMessage from "@atoms/statusMessage";

import {StyledHomeScreen} from "@styles/styledHomeScreen";

function HomeScreen(){

    const {option, setOption} = useFormOption();

    const {message} = useStatusMessage();

    return(
        <StyledHomeScreen>
            {
                message != "" && <StatusMessage/>
            }
            <Title value="Carteirinha de vacinação pet"/>
            <FormButtonsSection/>
        {
            option !== "" && <Form/>
        }
        </StyledHomeScreen>
    )
};

export default HomeScreen;