/** @format */

function throttle(fn, time) {
    return function (args) {
        let prevCall = this.lastCall;
        this.lastCall = Date.now();
        if (prevCall === undefined || this.lastCall - prevCall > time) {
            fn(args);
        }
    };
}

let throttleLog = throttle((args) => console.log(`My args are ${args}`), 3000);
throttleLog(111);
throttleLog(222);
throttleLog(333);
throttleLog(444);
setTimeout(() => throttleLog(222), 2000);
