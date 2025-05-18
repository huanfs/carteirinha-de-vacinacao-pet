"use client";

import styled from "styled-components";

export const StyledVaccine = styled.article`
    width:120px;
    height:120px;
    min-width:120px;
    min-height:120px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;
    padding: var(--Space-short);
    gap: var(--Space-short);
    background-color:var(--Brown);
    border-radius: var(--Rounded);
    transition: var(--Short);

        & > svg{
            min-width:20px;
            min-height:20px;
            color:var(--White);
            transform:scale(1.2,1.2);
        }

        & > p{
            width:100%;
            font-size: var(--Text-size);
            font-weight: var(--Font-darken);
            color: var(--White);

            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }

        &:hover{
            cursor:pointer;
            filter: var(--Darken);
        }
`;