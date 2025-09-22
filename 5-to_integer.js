const firstArg = process.argv[2];
const convertedNumber = parseInt(firstArg, 10);

if (isNaN(convertedNumber)) {
  console.log("Not a number");
} else {
  console.log("My number: " + convertedNumber);
}
