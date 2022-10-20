/* @param {Date} start - date to start
 ** @param {number} count - number of months to generate dates for
 ** @returns {Array} monthly Dates from start for count months
 */
// function getMonthlyDates(startDt, endDt) {
//   let result = [];
//   let temp;
//   let year = startDt.getFullYear();
//   let month = startDt.getMonth();
//   let startDay = startDt.getDate();
//   while (temp < endDt) {
//     temp = new Date(year, month + i, startDay);
//     if (temp.getDate() != startDay) {
//       temp.setDate(0);
//     }
//     result.push(temp);
//   }
//   return result;
// }

function getDateArray(
  startDate,
  endDate,
  interval = 1,
  intervalUnit,
  weekStartsOn = "Monday"
) {
  const startDt = new Date(startDate);
  const endDt = new Date(endDate);
  let dateArray = new Array();

  switch (intervalUnit) {
    case "day":
      while (startDt < endDt) {
        dateArray.push(new Date(startDt));
        startDt.setDate(startDt.getDate() + interval);
      }
      break;
    case "week":
      while (startDt < endDt) {
        dateArray.push(new Date(startDt));
        startDt.setDate(startDt.getDate() + interval * 7);
      }
      break;
    case "month":
      let temp = new Date(startDate);
      let year = temp.getFullYear();
      let month = temp.getMonth();
      let startDay = temp.getDate();
      dateArray.push(temp);
      while (temp <= endDt) {
        temp = new Date(year, month + interval, startDay);
        if (temp.getDate() != startDay) {
          temp.setDate(0);
        }
        dateArray.push(temp);
        year = temp.getFullYear();
        month = temp.getMonth();
        startDay = temp.getDate();
      }
      break;
    case "year":
      while (startDt < endDt) {
        dateArray.push(new Date(startDt));
        startDt.setFullYear(startDt.getFullYear() + 365 * interval);
      }
  }

  return dateArray;
}

// const dateArray= new getDatearray(startDate, endDate).getDatearray();
console.log(getDateArray("2022-02-26", "2023-02-26", 1, "month"));

//Get all date arrays for events in a date range  (start date, end date, interval, interval unit, format, locale, week starts on)
