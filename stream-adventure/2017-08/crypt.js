// Your program will be given a passphrase on `process.argv[2]` and 'aes256'
// encrypted data will be written to stdin.

// Simply decrypt the data and stream the result to process.stdout.

const crypto = require('crypto')
const decipher = crypto.createDecipher('aes256', process.argv[2])

process.stdin.pipe(decipher).pipe(process.stdout)
