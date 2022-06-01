class CustomError extends Error {
  constructor(args) { //this is the object being created
    super(args); //calls the object
    this.name = "CustomError"; // this is the name of the class
  }
}

function throwGenericError() {
  throw new Error("Generic error");
}

function throwCustomError() {
  throw new CustomError("Custom error");
}

console.log("force Generic Error");
try {
  console.log("Generic error try block");
  throwGenericError();
} catch (err) {
  console.log("Generic error catch block");
  console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("Custom error finally block");
}

console.log("force Custom Error");
try {
  console.log("Custom error try block");
  throwCustomError();
} catch (err) {
  console.log("Custom error catch block");
  console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("Custom error finally block");
}

