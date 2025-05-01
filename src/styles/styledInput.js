"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
    width:100%;
    border:none;
    outline:0;
    background-color:transparent;
    font-size: var(--Text-size);
    text-align:center;
    border-bottom:2px solid var(--Brown);
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));

        &::placeholder{
            text-transform:capitalize;
        }
`;