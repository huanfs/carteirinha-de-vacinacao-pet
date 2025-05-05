import React,{useState, useEffect} from "react";

import Image from "next/image";

import {StyledLoading} from "@styles/styledLoading";

function Loading(){

    const[count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev > 4 ? 0 : prev + 1));
        }, 200);
    
        return () => clearInterval(interval);
    }, []);

    return(
        <StyledLoading>
            <div>
                <Image 
                    src={"/images/patinha.png"} 
                    width="50" 
                    height="50"
                    alt="patinha de cachorro"
                    style={{display: count > 3 ? 'flex' : 'none', marginLeft: '20px'}}
                />
                <Image 
                    src={"/images/patinha.png"} 
                    width="40" 
                    height="40"
                    alt="patinha de cachorro"
                    style={{display: count > 2 ? 'flex' : 'none', transform:'rotate(-50deg)', marginLeft: '-20px'}}
                />
                <Image 
                    src={"/images/patinha.png"} 
                    width="20" 
                    height="20"
                    alt="patinha de cachorro"
                    style={{display: count > 1 ? 'flex' : 'none', marginLeft: '20px'}}
                />
                <Image 
                    src={"/images/patinha.png"} 
                    width="10" 
                    height="10"
                    alt="patinha de cachorro"
                    style={{display: count > 0 ? 'flex' : 'none', transform:'rotate(-50deg)', marginLeft:'-20px'}}
                />
            </div>
        </StyledLoading>
    )
};

export default Loading;