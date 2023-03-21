//deve stare dentro al click
const button = document.getElementById('confirm');
button.addEventListener('click', function(){

  let nameUser = document.getElementById('nameUser').value;
  console.log(nameUser);

  let distanceUser = document.getElementById('kmUser').value;
  console.log(distanceUser);

  let ageRange = document.getElementById('ageRange').value;
  console.log(ageRange);
})



let distanceUser = document.getElementById('kmUser').value;
console.log(distanceUser);

let basicTicketprice = 0.21 * distanceUser;
console.log(basicTicketprice);

let discountedTicket = (basicTicketprice * 20) / 100;
let discountedTicketSenior = (basicTicketprice * 40) / 100;

let finalPrice = basicTicketprice - discountedTicket;
let finalPriceSenior = basicTicketprice - discountedTicketSenior;

