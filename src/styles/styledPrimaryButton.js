"use client";

import styled from "styled-components";

export const StyledPrimaryButton = styled.input`
    height: 45px;
    border-radius: var(--Rounded);
    border:none;
    outline:0;
    display:flex;
    align-items:center;
    justify-content:center;
    text-transform:uppercase;
    color:var(--White);
    background-color:var(--Brown);
    transition: var(--Short);
    font-size: var(--Subtitle-size);
    font-family: var(--Roboto);
    box-shadow: var(--Shadow);

        &:hover{
            cursor:pointer;
            filter:var(--Lighteen);
        }
`;