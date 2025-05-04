import {Usuarios} from "@/app/lib/models/usuarios";

export async function POST(request){
    try{
        const {name, password} = await request.json();

        const register = await Usuarios.create({
            nome:name,
            senha: password,
        });

        if(!register){
            console.log("Não foi possível criar o usuário")
            return new Response(JSON.stringify({message: `Não foi possível criar este usuário`}),{
                status:400,
                headers:{
                    "Content-Type": "aplication/json"
                }
            })
        }
        if(register){
            console.log("Usuário criado com sucesso")
            return new Response(JSON.stringify({message: `usuário foi registrado com sucesso`}),{
                status:200,
                headers:{
                    "Content-Type": "application/json"
                }
            })
        }
    }
    catch(err){
        console.log("erro: " + err)
        return new Response(JSON.stringify({message: `houve um erro na api: ${err}`}))
    }
};