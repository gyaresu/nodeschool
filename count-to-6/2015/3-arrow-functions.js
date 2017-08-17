let inputs = process.argv.slice(2);
let results = inputs.map((x) => x.substr(0, 1)).
                    reduce((a, b) => a.concat(b));

console.log(`[${ inputs }] becomes "${ results }"`);