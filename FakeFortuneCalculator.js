/* 
 * Created by Joe Ferrucci at Kronoware
 * coderjoes.com
 * kronoware.com
 *
 */
 

/* Calculate your money:
 * "amount" you want to double each day
 * "days" number of days you want it to double
 * Example: amount = 0.01, days = 4 yields:
 * Day 1 = 0.01
 * Day 2 = 0.02
 * Day 3 = 0.04
 * Day 4 = 0.08
 * Therefore, FakeFortuneCalculator(0.01, 4) returns 0.08
 */

function FakeFortuneCalculator(amount, days) {
  var result = amount;
  for (var count = 1; count < days; count++)
    result = result * 2;
  return result;
}



// Have fun!
console.log( "%c%f", "background:blue;color:orange;font-size:16pt", FakeFortuneCalculator(0.01, 30) );
