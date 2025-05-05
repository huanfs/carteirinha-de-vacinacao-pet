import React from "react";

import {StyledMainApp} from "@styles/styledMainApp";

import Header from "@organisms/header";

function MainApp(){
    return(
        <StyledMainApp>
            <section>
            {/*tudo que estiver aqui dentro não tem blur*/}
                <Header/>
            </section>
        </StyledMainApp>
    )
};

export default MainApp;