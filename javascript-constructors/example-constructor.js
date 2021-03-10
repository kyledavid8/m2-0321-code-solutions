function ExampleConstructor() {
};

console.log('value of proto:', ExampleConstructor.prototype);
console.log('typeof proto:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log(newConstructor);

var instanceOfConstructor = newConstructor instanceof ExampleConstructor;
console.log(instanceOfConstructor);
