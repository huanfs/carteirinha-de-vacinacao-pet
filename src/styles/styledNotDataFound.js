"use client";

import styled from "styled-components";

export const StyledNotDataFound = styled.article`
    width:320px;
    height:700px;
    border-radius: var(--Rounded);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: var(--Inner-space);
    background-color: var(--Soft-gray);
    position:relative;
    top:3%;

        & p{
            width:80%;
            text-align:center;
            font-size: var(--Text-size);
        }
`;