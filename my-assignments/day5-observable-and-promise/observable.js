// Promise is executed only once

// const promise = new Promise((resolve) => {
//     let counter=0;
//     setInterval(() => {
//         counter+=1;
//         console.log('counter value is '+counter)
//         resolve(counter);
//     }, 1000);
// })
// promise.then(value =>console.log(value));


// Observer can be executed multiple times 

// const obs = rxjs.Observable.create((observer) => {
    
//     console.log("Observable started");
//     var counter = 1;
//     const intervalId = setInterval(() => {
//       if (observer.closed) {
//         console.log("Received cancellation");
//         clearInterval(intervalId);
       
//       }
//      observer.next(counter++);
//     //  observer.error('error');
//      observer.complete();
//     }, 1000);
// })
// sub=obs.subscribe(
//   value =>console.log(value),
//   //we are subscribing error messages within this subscription block
//   error=> console.log(error),
//   complete=> console.log('Done!')
//   );

// setInterval(() => {
//     sub.unsubscribe();
// }, 4000);


//multicast
// let promise = new Promise((resolve) => {
//   resolve(Math.random())
// })

// promise.then(value => console.log(value))
// promise.then(value => console.log(value))

let observable = rxjs.Observable.create((observer) => {
  observer.next(Math.random())
})

observable.subscribe(value => console.log(value))
observable.subscribe(value => console.log(value))