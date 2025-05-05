"use client";

import useStatusMessage from "@store/useStatusMessage";
import useLoading from "@store/useLoading";

import {CreateNewUser} from "@services/createNewUser";
import {LogIn} from "@services/logIn";


export async function IsValidCredentialsFormat(name, password, confirm, method, push){
    
    const {setMessage} = useStatusMessage.getState();
    const {setLoading} = useLoading.getState();

    setLoading(true); //Inicia o loading

    if(name.length < 6){
        setMessage("usuário deve ter ao menos 6 caracteres");
    }
    if(password.length < 8){
        setMessage("senha deve ter ao menos 8 caracteres");
    }
    if(method === "entrar"){
        LogIn(name, password, push, setLoading)
        //incluir função de entrar
    }
    else if(method === "registrar"){
        if(password != confirm){
            setMessage("as senhas não conferem");
        }
        else{
            CreateNewUser(name, password, push, setLoading);
        }
    }
}