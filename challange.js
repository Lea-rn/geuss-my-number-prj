// const calcTip = function (bill){
// if (bill >= 50 && bill <= 300){
//     return bill*0.15
// } else {
//     return bill*0.2
// }
// }

// const calcTip = function (bill){
//     return bill >= 50 && bill<=300 ? bill*0.15 : bill*0.2
// }

// const bills = [22,295,176,440,37,105,10,1100,86,52] ;
// const tips = [] ; 
// const totals = [] ; 

// for (let i = 0 ; i<bills.length ; i++){
//// first way :
//  const tip = calcTip(bills[i]) ;  // 4.4  ; 44.25
//  tips.push(tip)   /// [4.4,44.25]
//  totals.push(tip+bills[i])  /// [26.4 ,339.25 ]

//// second way : 
// tips.push(calcTip(bills[i]))
// totals.push(tips[i]+bills[i])
// }

// console.log(bills)
// console.log(tips)
// console.log(totals)


///// bonus : 

// function calcAverage (arr){
// let sum = 0 ; 
// for (let i = 0 ; i <arr.length ; i++){
// //    sum = sum + arr[i]
//    sum+=arr[i]
// }
// return sum / arr.length
// }

// console.log(calcAverage([1,2,3]))  
// console.log(calcAverage(totals))

/// 0 = 0 + 1 ; sum =1
//  1 = 1 + 2 ; sum = 3 
// 3 = 3 + 3 ; sum = 6 ;   /// 6 /3
