// 7-multi_c.js
const x = process.argv[2];

if (!x || isNaN(parseInt(x))) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < parseInt(x)) {
        console.log("C is fun");
        i++;
    }
}

