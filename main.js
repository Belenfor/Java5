function sayHi(name = 'User') {
  name = prompt ("What is your name?", "User");
  const greeting = 'Hi, ' + name + '!';
	alert(greeting);
}

sayHi();
function checkage(age = "Age") {
  age = prompt ("How old are you?", 20); 
  if(age >= 18) {
    alert("you are welcome!")
  } else{
    alert("you are not allowed")
}}
checkage();