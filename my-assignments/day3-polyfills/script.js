let name = {
    firstname: "Anonymous",
    lastname: "User"
}

let printFullName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

if (Function.mybind == undefined) {
    Function.prototype.mybind = function (...args) {
        let obj = this,
            params = args.slice(1);
        return function (...args2) {
            obj.apply(args[0], [...params, ...args2]);
        }
    }
    let getFullName = printFullName.mybind(name, "Dehradun", "Uttarakhand");
    getFullName("India");
}
else {
    let getFullName = printFullName.bind(name, "Dehradun", "Uttarakhand");
    getFullName("India");
}

