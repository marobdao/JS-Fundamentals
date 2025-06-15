const arg = process.argv[2];
const times = Number(arg);

if (!isNaN(times) && arg !== undefined && arg.trim() !== '') {
  for (let i = 0; i < times; i++) console.log("C is fun");
} else {
  console.log("Missing number of occurrences");
}
