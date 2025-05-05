import {Usuarios} from "@lib/models/usuarios";

export async function POST(request){
    try{
        const {name, password} = await request.json();
        const auth = await Usuarios.findOne({
            where:{nome: name, senha: password}
        });
        if(auth){
            return new Response(
                JSON.stringify({message:`Usuário foi encontrado no banco de dados`}),{
                    headers:{
                        status:200,
                        "Content-Type":"application/json",
                    }
                }
            )
        }
        if(!auth){
            return new Response(
                JSON.stringify({message:`Usuário não foi encontrado`}),{
                    headers:{
                        status:400,
                        "Content-Type":"application/json",
                    }
                }
            )
        }
    }
    catch(err){
        return new Response(
            JSON.stringify({message:`Erro na api: ${err}`})
        )
    }
}