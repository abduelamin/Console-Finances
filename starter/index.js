var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

let months = finances.length;

console.log(`Total months: ${months}`);

let money = 0;
let difference = 0;
let change = finances[0][1];

for (let i = 0; i < finances.length; i++){


  money += finances[i][1];

//   Since we can't take things created in a loop and use it outside of the loop. I have created a variable (money) to store the money and incorporated it into the loop. After each iteration of the loop it takes the value represented by finances[i][1] and adds it to the value of money. e.g. we know on the 1st loop iteration we know money = 0 and say finances = 50. This code wil add 50 to 0 making money have a new assigned value of 50. When the next iteration starts. Money will be 50 and the code repeats.
//   The most important thing here is create the money variable before the loop so that we can use it.

difference += finances[i][1] - change;  
change = finances[i][1];

// I used this above code because the loop starts at i = 0. there is a quicker way to write this and it can be down via difference = finances[i][1] - finances[i - 1][1]; but the initialiser should be set to i = 1. This is because we are calulcating the difference between the index 1 and index 0 as the starting position. In this longer code above I did it this way to help me understand it better.

  
}

let averageChange = difference / (finances.length - 1);  //The reason we did  -1 is because although theres 86 months in the list, were only calculating the difference between the months and theres only 85 differences. 

console.log(`Total: ${money}`);
console.log(`Average Change: ${averageChange.toFixed(2)}`);



let greatestIncrease = 0;
let monthOfIncrease = 0;


for (let i = 1; i < finances.length; i++) {

  let difference2 = finances[i][1] - finances[i - 1][1];

  if (difference2 > greatestIncrease) {
    greatestIncrease = difference2;  
    
    // This code allows me to pinpoint the greatest $increase. I'll use the 1st iteration to make my point. This is because the conditonal statement says that if the difference between 2 months is greater than the greatestIncrease which we know = 0 (as we defined it as that outside the loop) then reassign that difference to the greatestincrease variabale to show that there has been an increase between 2 months. Therefore this loop will continue to run and each time a bigger inceases between 2 months occurs it will make the if conditonal statmement true and hence run the code block to reassign the greatest increase to the new number. - This allows us to keep track of the largest change that occured within this period. 


    monthOfIncrease = i; // This code is part of the if statement and it basically means to highlight the index in which the greatest increases occured. - this will help us to grab the month of which this greatest increased occured in.

   }
}

let dateOfGreatestIncrease = finances[monthOfIncrease][0];

console.log(`Greatest Increase in Profits/losses: ${dateOfGreatestIncrease} $${greatestIncrease}`);

let greatestDecrease = 0;
let MonthofDecrease = 0;

for (let i = 1;i < finances.length; i++){

  let difference3 = finances[i - 1][1] - finances[i][1];

  if(difference3 > greatestDecrease) {
    greatestDecrease = difference3
    MonthofDecrease = [i]
  }
}

let dateOfGreatestDecrease = finances[MonthofDecrease][0];

console.log(`Greatest Decrease in Profits/losses: ${dateOfGreatestDecrease} $-${greatestDecrease}`);
;


