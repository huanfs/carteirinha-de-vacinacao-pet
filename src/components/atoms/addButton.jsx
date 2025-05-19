"use client";

import React,{useState} from "react";

import { FaPlus } from "react-icons/fa6";

import NewVaccine from "@molecules/newVaccine";

import {StyledAddButton} from "@styles/styledAddButton";

function AddButton(){

    const[isOpen, setIsOpen] = useState(false);

    return(
        <>
        {
            isOpen ? (
                <NewVaccine action={setIsOpen}/>
            ) : (
                <StyledAddButton onClick={()=>{setIsOpen(true)}}>
                    <FaPlus/>
                    adicionar
                </StyledAddButton>
            )
        }
        </>
    )
};

export default AddButton;