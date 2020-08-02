var Observable = require('rxjs')

var Ob = Observable.Observable.create((observer) => {
    observer.next('hello');
});

Ob.subscribe((x) => func(x));

function func(msg) {
    console.log("the new data is " + msg)
}