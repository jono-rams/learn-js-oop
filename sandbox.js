class User{
  constructor(username, email){
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login(){
    console.log(`${this.username} has logged in.`);
    return this;
  }

  logout(){
    console.log(`${this.username} has logged out.`);
    return this;
  }

  incScore(){
    this.score++;
    console.log(`${this.username}'s score is now ${this.score}.`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, password, title){
    super(username, email);
    this.password = password;
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u => {
      return u.username !== user.username;
    });
  }
}

// create instances of User and Admin class and test methods

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const adminOne = new Admin('admin', 'admin@gmail.com', 'admin123', 'server admin');

let users = [userOne, userTwo, adminOne];
console.log(users);

adminOne.deleteUser(userTwo);
console.log(users);

