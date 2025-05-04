"use client";

import useStatusMessage from "@store/useStatusMessage";

import {CreateNewUser} from "@services/createNewUser";

export function IsValidCredentialsFormat(name, password, confirm, method, push){

    const {setMessage} = useStatusMessage.getState();

    if(name.length < 6){
        setMessage("usuário deve ter ao menos 6 caracteres");
    }
    if(password.length < 8){
        setMessage("senha deve ter ao menos 8 caracteres")
    }
    if(method === "entrar"){
        console.log("metodo entrar");
        //incluir função de entrar
    }
    else if(method === "registrar"){
        console.log("metodo registrar");
        if(password != confirm){
            setMessage("as senhas não conferem")
        }
        else{
            CreateNewUser(name, password, push);
        }
    }
}