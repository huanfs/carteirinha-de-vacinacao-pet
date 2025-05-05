"use client";

import styled from "styled-components";

export const StyledMenuButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    border:none;
    outline:0;

        & svg{
            transform: scale(2,2);
            color:var(--Very-dark-brown);

                &:hover{
                    cursor:pointer;
                }
        }
`;