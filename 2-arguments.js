// Use const to avoid using var
const args = process.argv.slice(2); // Get command-line arguments excluding 'node' and the script name

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
