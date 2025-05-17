"use client";

import styled from "styled-components";

export const StyledAddPet = styled.section`
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
    padding: var(--Space-short);

        & > button:first-child{
            display:flex;
            align-items:center;
            juistify-content:center;
            padding: 0.7em;
            border: 2px solid var(--Soft-red);
            color:var(--Soft-red);
            border-radius: var(--Soft-rounded);
            background-color:transparent;
            margin-left: auto;

                & svg{
                    transform:scale(1.7,1.7);
                }

                &:hover{
                    cursor:pointer;
                    filter:var(--Darken);
                }
        }

        & > {
            article{
                min-height:40px;
                width:100%;
                display:flex;
                align-items:center;
                flex-srap:no-wrap;
                gap: var(--Space-short);
                overflow-x:scroll;
                scrollbar-width:none;

                    &::-webkit-scrollbar{
                        display:none;
                    }
            }
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