import {DataTypes} from "sequelize";

import {sequelize} from "@lib/db";

export const Animais = sequelize.define("animais",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    raca:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    peso:{
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    usuarioId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "usuarios",
            key: "id",
        },
    },
});

sequelize.sync()
.then(()=>{
    console.log("Tabela animais sincronizada com sucesso")
})
.catch((err)=>{
    console.log("Erro ao sincronizar/criar animais: " + err)
})
