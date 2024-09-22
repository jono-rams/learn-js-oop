function User(username, email){
  // set up properties
  this.username = username;
  this.email = email;
};

User.prototype.login = function(){
  console.log(`${this.username} has logged in.`);
  return this;
}

User.prototype.logout = function(){
  console.log(`${this.username} has logged out.`);
  return this;
}

function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
  // delete a user
}

// create instances of User class and test methods

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const adminOne = new Admin('shaun', 'shaun@gmail.com', 'system admin');

console.log(userOne, userTwo, adminOne);

userOne.login().logout();

