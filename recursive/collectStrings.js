// collectStrings

// Write a function which accepts an object and returns an array of all the values in the object that have a typeof
// string.

function collectStrings(obj, arr = []) {
    let arrayObject = Object.values(obj);
    for (let key of arrayObject) {
        typeof (key) === "string" ? arr.push(key) : collectStrings(key, arr);
    }
    return arr;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])