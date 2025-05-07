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
    animation-name: animation-move-from-right;
    animation-iteration-count:1;
    animation-duration var(--Short);

        & p{
            width:80%;
            text-align:center;
            font-size: var(--Text-size);
        }
`;