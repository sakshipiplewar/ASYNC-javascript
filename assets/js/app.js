let cl = console.log;
// Sync
// Single threaded
// Non Bloking

function print10() {
    cl(10)
}

function print20() {
    setTimeout(() => {
        // api call to get data
        cl(20);
        print30()
    }, 1000);
}

function print30() {
    cl(30)
}
// print 10
// print 20
// print 30

function fetchdata(callBackFun) {
    setTimeout(() => {
        cl(`Data is fetched successfully..`);
        // templating();
        callBackFun();
    }, 2000);
}

function templatingLi() {
    cl(`Lists are created sucessfully`)
}

function templatingCard() {
    cl(`Cards are created sucessfully`)
}

fetchdata(templatingLi)
fetchdata(templatingCard)
// templatingLi()