
//promise is eager 
const promise =new Promise((value)=>{
    console.log("Promise is Running ");
    setTimeout(()=>{
        resolve('yep promise');
    },7000)
});
setTimeout(()=>{
    promise.then(console.log)
},4000);
// here before calling of then method promise is executed.


//observer is lazy which means it will run when subscribe() is called.
const obs = rxjs.Observable.create((observer)=>{
    console.log('observer running');
    setTimeout(()=>{
        observer.next('yep observer');
    },2000);
})

setTimeout(()=>{
    obs.subscribe(console.log);
},4000)


//here you can see observer will run when subscribe() will run
