const p = require("./services/products");

async function main() {
    console.log('carinhos de compras');
    p.getFullName("404", "mousepad");
    p.getFullName("508", "mouse");
    p.getProductLabel("mousepad");
}

main();    

    