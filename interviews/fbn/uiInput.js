const serverResponse = require("./serverResponse");

function transformShapeToUiInput(obj) {
    const uiInput = {};

    const serverResponse = {...obj};
    for (const chemId in serverResponse.metadata.isd.chemical) {
        const chem = serverResponse.metadata.isd.chemical[chemId];
        uiInput[chem.isd_id] = chem;
    }
    const upcsMap = {};
    for (const item of Object.values(serverResponse.metadata.upcs)) {
        let quantity = 0;
        const [upc, items] = [item.upc, serverResponse.items];
        if (upc in items && items[upc].quantity) {
            quantity = items[upc].quantity;
        }
        const upcEntry = {
            "price_mcu": item.price_mcu,
            "upc": item.upc,
            "quantity": quantity
        };
        const id = item.isd_id;
        upcsMap[id] ? upcsMap[id].push(upcEntry) : upcsMap[id] = [upcEntry];
    }
    for (const item in uiInput) {
        if (upcsMap[item]) {
            uiInput[item].upcs = upcsMap[item];
        }
    }

    return uiInput;
}

console.log(transformShapeToUiInput(serverResponse));
