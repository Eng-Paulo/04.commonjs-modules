const { getFullName, productType } = require("./services/products");
const config = require("./services/config");
const dataBase = require("./services/database");

async function main() {
    console.log('carinhos de compras');
    
    // Chame a função diretamente, já que foi extraída via desestruturação
    getFullName("1", "teclado"); // Correto

    console.log(productType);  // Exibe o objeto productType

    dataBase.connectToDataBase("my-data");  // Supondo que isso seja um método válido
}

main();
