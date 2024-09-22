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

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');

console.log(userOne, userTwo);

userOne.login();
userOne.incScore().incScore().incScore().incScore();
userTwo.logout();