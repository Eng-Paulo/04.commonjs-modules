const { getFullName, productType } = require("./services/products");
const config = require("./services/config");
const dataBase = require("./services/database");

async function main() {
    console.log('carinhos de compras');
    

    getFullName("1", "teclado"); 

    console.log(productType);  

    dataBase.connectToDataBase("my-data");  
}

main();
