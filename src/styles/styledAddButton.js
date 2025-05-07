"use client";

import styled from "styled-components";

export const StyledAddButton = styled.button`
    min-width:120px;
    min-height:120px;
    border-radius: var(--Rounded);
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap: var(--Space-short);
    background-color: var(--Desaturated-yellow);
    border:none;
    outline:0;
    transition: var(--Short);
    color:var(--White);
    text-transform:capitalize;
    font-size: var(--Text-size);

        & svg{
            transform:scale(2.2);
        }

        &:hover{
            cursor:pointer;
            filter: var(--Lighteen);
        }
`;