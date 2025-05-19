"use client";

import axios from "axios";

export async function AddInformations(name, age, weight, vaccineList){

    const token = localStorage.getItem("token");

    try{
        const request = await axios.post("http://localhost:3000/api/addInformations",{
            name:name, age:age, weight:weight, vaccineList:vaccineList, token:token
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        if(request.status === 200){
            console.log("deu tudo certo, resposta 200 da api");
            console.log(request.data);
        }
        else{
            console.log("algum erro ocorreu na requisição")
        }
    }
    catch(err){
        console.log("houve um erro na função addInformations: ", err)
    }
};