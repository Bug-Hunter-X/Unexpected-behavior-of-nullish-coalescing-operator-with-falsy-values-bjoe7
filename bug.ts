function printName(name?: string): void {
  console.log(name ?? "undefined");
}

printName(); //Prints "undefined"
printName(undefined); //Prints "undefined"
printName(null); //Prints "null"