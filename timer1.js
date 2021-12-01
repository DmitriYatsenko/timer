const time = [2, 5, 8];

const alarm = function (time) {
    let delay = 1000;
    for (let w = 0; w < 10; w++) {
        setTimeout(() => {
            let v = false;
            for (let u = 0; u < time.length; u++) {
                if (w === time[u]) {
                    v = true;
                }
            }
            if (v) {
                process.stdout.write('\x07');
            }
            console.log(w);
        }, delay);
        delay += 1000;
    }
}

alarm(time);