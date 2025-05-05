"use client";

import React from "react";

import useFormOption from "@store/useFormOption";

import useStatusMessage from "@store/useStatusMessage";

import Title from "@atoms/title";

import FormButtonsSection from "@molecules/formButtonsSection";

import Form from "@organisms/form";

import StatusMessage from "@atoms/statusMessage";

import {StyledHomeScreen} from "@styles/styledHomeScreen";


/*para teste do loading*/
import useLoading from "@store/useLoading";
import Loading from "@molecules/loading";

function HomeScreen(){

    /*para teste do loading*/
    const {loading, setLoading} = useLoading();

    const {option, setOption} = useFormOption();

    const {message} = useStatusMessage();

    return(
        <StyledHomeScreen>
            {
                loading && <Loading/>
            }
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