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

        & button{
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
        }
`;