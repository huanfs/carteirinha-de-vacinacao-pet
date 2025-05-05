"use client";

import React from "react";

import { IoMenu } from "react-icons/io5";

import { IoMdClose } from "react-icons/io";

import {StyledMenuButton} from "@styles/styledMenuButton";

import useMenu from "@store/useMenu";

function MenuButton(){

    const {isOpen, setIsOpen} = useMenu();

    return(
        <StyledMenuButton onClick={() => setIsOpen(!isOpen)}>
            {
                isOpen ? <IoMdClose/> : <IoMenu/>
            }
        </StyledMenuButton>
    )
};

export default MenuButton;