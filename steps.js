// steps

// Accepts a positive number N. Should console.log a step shape with N levels using the # character.
// Make sure the step has spaces on the right hand side!

// steps(2)
//   "# "
//   "##"

// steps(3)
//   "#  "
//   "## "
//   "###"

// steps(4)
//   "#   "
//   "##  "
//   "### "
//   "####"

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = "";
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}

console.log(steps(5));
