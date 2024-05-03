// comment-line Argument
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);

const argname = capitalize(process.argv[2] || "world");
console.log(` hello ${argname}`);