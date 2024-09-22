class User{
  constructor(username, email){
    // set up properties
    this.username = username;
    this.email = email;
  }
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in.`);
}

User.prototype.logout = function(){
  console.log(`${this.username} has logged out.`);
}

// create instances of User class and test methods

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

userOne.login();
userTwo.logout();

