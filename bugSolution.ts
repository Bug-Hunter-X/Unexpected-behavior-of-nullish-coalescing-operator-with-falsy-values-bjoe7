function printName(name?: string): void {
  if (name === null || name === undefined) {
    console.log("undefined");
  } else {
    console.log(name);
  }
}

printName(); //Prints "undefined"
printName(undefined); //Prints "undefined"
printName(null); //Prints "undefined"
printName(0); //Prints 0
printName(""); //Prints ""
printName(false); //Prints false