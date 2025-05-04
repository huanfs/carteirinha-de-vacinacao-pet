"use client";

import React,{useState} from "react";

import Subtitle from "@atoms/subtitle";

import Input from "@atoms/input";

import FormularyButton from "@atoms/formularyButton";

import useFormOption from "@store/useFormOption";

import {StyledFormularyContent} from "@styles/styledFormularyContent";

function FormularyContent(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {option} = useFormOption(); 

    return(
        <StyledFormularyContent>
            <Subtitle content={option}/>
            <Input type="text" placeholder="usuário" action={setName}/>
            <Input type="password" placeholder="senha" action={setPassword}/>
            {
                option === "registrar" && <Input type="password" placeholder="confirmar senha" action={setConfirmPassword}/>
            }
            <FormularyButton 
                value={option}
                user={{name: name, password: password, confirm: confirmPassword}}
            />
        </StyledFormularyContent>
    )
};

export default FormularyContent;