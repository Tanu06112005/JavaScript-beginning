// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());  
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3,34)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()    // give milliseconds from 1 Jan 1970 to now(used to find out the differcee bw the two current times )


//---------------------------------------------------------
let start = Date.now();

// some code

let end = Date.now();
console.log(end - start); // time in milliseconds
//---------------------------------------------------------

/*
Main Difference:-

Feature         	             Date.now()       	new Date()
Returns	Timestamp              number(milliseonds)	Date object
Type	                            Number	         Object
Contains formatted date?	         No	               Yes
Faster/simple for timing	         Yes	            No
Can use date methods?	              No	           Yes
*/

// ---------------------------------------------------------------
console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);// gives the current date and time
console.log(newDate.getMonth() + 1);// gives the month (0-11) where 0 is January and 11 is December, so we add 1 to get the correct month number
console.log(newDate.getDay());    // gives the day of the week (0-6) where 0 is Sunday and 6 is Saturday

// `${newDate.getDay()} and the time `  // console.log(newDate.toLocaleString('default', { weekday: 'long' })); // gives the day of the week in long format (e.g., "Monday", "Tuesday", etc.)

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
