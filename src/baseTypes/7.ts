/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Sun = "Sunday",
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
}

function isWeekend(day: Days): boolean {
  return day === Days.Sat || day === Days.Sun;
}

console.log(isWeekend(Days.Thu));
console.log(isWeekend(Days.Sun));
