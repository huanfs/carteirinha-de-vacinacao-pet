"use client";

import styled from "styled-components";

export const StyledNewVaccine = styled.section`
    width:320px;
    height:700px;
    border-radius: var(--Rounded);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: var(--Inner-space);
    background-color: var(--Soft-gray);
    position:absolute;
    top:0;
    left:0;
    padding:0 4em; 

        & > div{
            width:250px;
            height:200px;
            padding: var(--Space-short);
            border:1px solid var(--Brown);
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            border-radius: var(--Rounded);

                & > svg{
                    color:var(--Soft-red);
                    transform:scale(2,2);
                    background-color:transparent;
                    position:absolute;
                    top:3.7%;
                    right:8%;
                }

                & > button:last-child{
                    width:200px;
                    min-height:40px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background-color: var(--Soft-green);
                    border:none;
                    outline:0;
                    border-radius: var(--Soft-rounded);
                    font-size: var(--Text-size);
                    color:var(--White);
                    transition: var(--Short);

                        &:hover{
                            cursor:pointer;
                            filter: var(--Lighteen);
                        }

        }
`;