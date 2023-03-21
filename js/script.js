let nameUser;
let kmUser;


let basicTicketprice = 0.21 * kmUser;



let discountedTicket = (basicTicketprice * 20) / 100;
let discountedTicketSenior = (basicTicketprice * 40) / 100;

let finalPrice = basicTicketprice - discountedTicket;
let finalPriceSenior = basicTicketprice - discountedTicketSenior;

document.getElementById('nameUser').innerHTML = nameUser;



