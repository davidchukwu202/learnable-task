class MyClass {
    static Name = "my name is david";
  
    
    constructor(name) {
      
      this.name = name;
    }
  
    // Instance method
    instanceMethod() {
      console.log(`Hello, ${this.name}!`);
    }
  
    // Class method (static method)
    static staticMethod() {
      console.log("my dog is black");
    }
  }

  // Accessing static property
  console.log(MyClass.staticProperty);
  
  // Creating instances of the class
  const person1 = new MyClass("John");
  const person2 = new MyClass("joy");
  
  // Accessing instance properties
  console.log(person1.name);
  
  // Calling instance methods
  person1.instanceMethod();
  
  // Calling static method
  MyClass.staticMethod();
