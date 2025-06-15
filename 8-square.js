const arg = process.argv[2];
const size = Number(arg);

if (!isNaN(size) && arg !== undefined && arg.trim() !== '') {
  const row = 'X'.repeat(size);
  for (let i = 0; i < size; i++) console.log(row);
} else {
  console.log("Missing size");
}