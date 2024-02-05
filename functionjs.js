'use strict';

const book=[];
function travel(numofpanager=0,hotelname,price=0*numofpanager){
    const booking={
       numofpanager,
       hotelname,price,
    };
    console.log(booking);
    book.push(booking);
  
}
travel(50,'hotel international',59000);
// travel(undefined,'kauski',1000);