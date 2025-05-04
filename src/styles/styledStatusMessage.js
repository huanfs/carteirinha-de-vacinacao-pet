"use client";

import styled from "styled-components";

export const StyledStatusMessage = styled.p`
    font-size: var(--Subtitle-size);
    text-align:center;
    font-weight:700;
    color: var(--Brown);
    text-shadow: var(--Shadow);
    animation-name: animation-appear;
    background-color: var(--Transparence);
    padding: 5px 10px;
    border-radius: var(--Soft-rounded);
    animation-duration: var(--Short);
    animation-iteration-count: 1;
    position:absolute;
    top:20px;
`;