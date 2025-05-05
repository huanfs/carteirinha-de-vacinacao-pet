"use client";

import styled from "styled-components";

export const StyledLoading = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    background-color: var(--Transparence);
    z-index:10;

        & div{
            height:100px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:flex-end;

                & span{
                    margin-top: var(--Space-short);
                }
        }
`;