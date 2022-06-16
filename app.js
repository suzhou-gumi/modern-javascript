// Person constructor
function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
}

// const brad = new Person("Brad", 32);
// const john = new Person("John", 30);

const brad = new Person("Brad", "9-10-1981");
console.log(brad);
