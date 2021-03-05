// Flatten Tree — Atlassian Question

// recursive
// const flatten = input => {
//     const result = [];
//     const traverse = treeNode => {
//         result.push({value: treeNode.value});
//         treeNode.children.map(traverse);
//     };
//     input.map(traverse);
//     return result;
// };

// breadth-first traversal
// function flatten(input) {
//     const result = [];
//     const arr = [...input];
//     while (arr.length) {
//         const node = arr.shift();
//         arr.push(...node.children);
//         result.push({value: node.value});
//     }
//     return result;
// }

// depth-first traversal
function flatten(input) {
    const result = [];
    const arr = [...input];
    while (arr.length) {
        const node = arr.shift();
        arr.unshift(...node.children);
        result.push({value: node.value});
    }
    return result;
}

const example = [
    {
        value: 'value1',
        children: [
            {
                value: 'value200',
                children: [
                    {
                        value: 'value3',
                        children: []
                    }
                ]
            },
            {
                value: 'value4',
                children: []
            }
        ]
    },
    {
        value: 'value5',
        children: [],
    }
];

const result = flatten(example);

const expected = [
    {value: 'value1'},
    {value: 'value200'},
    {value: 'value3'},
    {value: 'value4'},
    {value: 'value5'}
];

console.log("result should match expected: ", JSON.stringify(result) === JSON.stringify(expected));
console.log("result: ", result);
