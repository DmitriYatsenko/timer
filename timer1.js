//const time = [2, 5, 8];
const time = process.argv.slice(2);
let latestTime = Math.max(...time.map(t => parseInt(t)));

const alarm = function (time) {
    let delay = 0;
    for (let w = 0; w <= latestTime; w++) {
        setTimeout(() => {
            let v = false;
            for (let u = 0; u < time.length; u++) {
                if (w === parseInt(time[u])) {
                    v = true;
                }
            }
            if (v) {
                process.stdout.write('\x07');
                console.log('beep-beep!')
            }
            else {
                console.log(w);
            }
        }, delay);
        delay += 1000;
    }
}
alarm(time);