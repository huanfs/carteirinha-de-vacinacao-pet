"use client";

import styled from "styled-components";

export const StyledAnimalButton = styled.input`
    min-width:100px;
    height:40px;
    text-transform:capitalize;
    font-size: var(--Text-size);
    color:var(--White);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:var(--Soft-rounded);
    border:none;
    outline:0;
    transition: var(--Short);

        &:hover{
            cursor:pointer;
            filter: var(--Darken);
        }

        &:focus{
            color:var(--Black);
            border:2px inset var(--Soft-green);
            opacity:0.9;
        }
`;