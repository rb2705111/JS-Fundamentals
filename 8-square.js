// 8-square.js
const size = process.argv[2];

if (!size || isNaN(parseInt(size))) {
    console.log("Missing size");
} else {
    const n = parseInt(size);
    if (n < 1) return;

    let i = 0;
    while (i < n) {
        console.log("X".repeat(n));
        i++;
    }
}
