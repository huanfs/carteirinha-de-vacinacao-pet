import { Usuarios } from "@/app/lib/models/usuarios.js";
import { Animais } from "@lib/models/animais.js";
import { Vacinas } from "@lib/models/vacinas.js";

// Um usuário pode ter muitos animais
Usuarios.hasMany(Animais, { foreignKey: "usuarioId" });
Animais.belongsTo(Usuarios, { foreignKey: "usuarioId" });

// Um animal pode ter muitas vacinas
Animais.hasMany(Vacinas, { foreignKey: "animalId" });
Vacinas.belongsTo(Animais, { foreignKey: "animalId" });

export { Usuarios, Animais, Vacinas };