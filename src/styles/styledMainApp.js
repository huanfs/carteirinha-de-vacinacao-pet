"use client";

import styled from "styled-components";

export const StyledMainApp = styled.main`
    width: 100%;
    height: 100%;
    position: relative;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url(images/bg.png);
            background-size: 100% 100%;
            filter: blur(5px);
            opacity: 0.9;
            z-index: 0;
        }

        & > section {
            height:100%;
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`;