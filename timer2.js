const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const standOut = process.stdout;
const beep = () => process.stdout.write('\x07');

stdin.on('data', key => {
    if (key === 'b') {
        beep();
    }
    if (key >= 1 && key <= 9) {
        standOut.write(`Setting timer for ${key} seconds...\n`);
        setTimeout(() => {
            beep();
        }, key * 1000);
    }
    if (key === '\u0003') {
        standOut.write("Closing\n");
        process.exit();
    }
});