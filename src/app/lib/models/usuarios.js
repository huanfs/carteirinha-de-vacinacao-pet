import {DataTypes} from "sequelize";

import {sequelize} from "@lib/db";

export const Usuarios = sequelize.define("usuarios",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize.sync()
.then(()=>{
    console.log("Tabela usuario sincronizada com sucesso")
})
.catch((err)=>{
    console.log("Erro ao sincronizar/criar usuario: " + err)
})