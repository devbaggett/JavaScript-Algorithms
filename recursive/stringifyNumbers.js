// stringifyNumbers

// Write a recursive function called stringifyNumbers which takes in an object and finds all of the values which are numbers and
// converts them to strings.

function stringifyNumbers(obj, newObj = {}) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else if (Array.isArray(obj[key])) {
            let newArr = [];
            for (let element of obj[key]) {
                typeof (element) === "number" ? newArr.push(element.toString()) : newArr.push(element);
            }
            newObj[key] = newArr;
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj = {
    num: 1,
    test: [1, 2, true],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: ["1", "2", true],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/