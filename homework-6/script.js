function downloadMovie1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Movie 1 downloaded");
        }, 1000);
    });
}

function downloadMovie2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Movie 2 downloaded");
        }, 2000);
    });
}

function downloadMovie3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Movie 3 downloaded");
        }, 3000);
    });
}

async function downloadAll() {
    console.log(await downloadMovie1());
    console.log(await downloadMovie2());
    console.log(await downloadMovie3());
}

async function dowloadAllAtTheSameTime(){
    Promise.all([downloadMovie1(), downloadMovie2(), downloadMovie3()]).then(result => {
        console.log(result)
    })
}

async function fastestPromise() {
    Promise.race([downloadMovie1(), downloadMovie2(), downloadMovie3()]).then(result => console.log("fastest promise is: " + result));
}

downloadAll();
dowloadAllAtTheSameTime();
fastestPromise();