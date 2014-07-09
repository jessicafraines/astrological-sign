var prompt = require('sync-prompt').prompt;
var today = new Date();

var dob = prompt("What is your dob in mm/dd/yyyy?");
dob = new Date(dob);/*this is the parseInt*/

var dobYear = dob.getFullYear();
var dobMonth = dob.getMonth()+1;
var dobDate = dob.getDate();
var thisYearsBirthday = dobMonth + '/' +dobDate + '/' + today.getFullYear();
thisYearsBirthday = new Date(thisYearsBirthday);

var age = today.getFullYear() - dob.getFullYear();

if (today.getTime() < thisYearsBirthday.getTime()) {
 age--;
}
console.log("Your age is", age);
var sign;
switch(dobMonth){
  case 1:
    if(dobDate < 20){
      sign = 'Capricorn';
    }else{
      sign = 'Aquarius';
    }
    break;
  case 2:
    if(dobDate < 19){
      sign = 'Aquarius';
    }else{
      sign = 'Pisces';
    }
    break;
  case 3:
    if(dobDate < 21){
      sign = 'Pisces';
    }else{
      sign = 'Aries';
    }
    break;
  case 4:
    if(dobDate < 20){
      sign = 'Aries';
    }else{
      sign = 'Taurus';
    }
    break;
  case 5:
    if(dobDate < 21){
      sign = 'Taurus';
    }else{
      sign = 'Gemini';
    }
    break;
  case 6:
    if(dobDate < 21){
      sign = 'Gemini';
    }else{
      sign = 'Cancer';
    }
    break;
  case 7:
    if(dobDate < 23){
      sign = 'Cancer';
    }else{
      sign = 'Leo';
    }
    break;
  case 8:
    if(dobDate < 23){
      sign = 'Leo';
    }else{
      sign = 'Virgo';
    }
    break;
  case 9:
    if(dobDate < 23){
      sign = 'Virgo';
    }else{
      sign = 'Libra';
    }
    break;
  case 10:
    if(dobDate < 23){
      sign = 'Libra';
    }else{
      sign = 'Scorpio';
    }
    break;
  case 11:
    if(dobDate < 22){
      sign = 'Scorpio';
    }else{
      sign = 'Sagittarius';
    }
    break;
  case 12:
    if(dobDate < 22){
      sign = 'Sagittarius';
    }else{
      sign = 'Capricorn';
    }
}
console.log("Your sign is " + sign + ".");

