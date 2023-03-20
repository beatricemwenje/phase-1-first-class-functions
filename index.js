function receivesAFunction(callback) {
    callback();
}

function returnANamedFunction() {
    let returnANamedFunction;
    return function named() {
        console.log("A function name");
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Joseph");
    };
}
