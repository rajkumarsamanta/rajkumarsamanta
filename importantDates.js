/* The function should return the important dates associated with the event. */

dates = [
  { eventName: "Completed WD101 - Level 1", date: "Aug 24 2021" },
  { eventName: "Completed WD101 - Level 2", date: "Aug 25 2021" },
  { eventName: "Completed WD101 - Level 3", date: "Aug 26 2021" },
  { eventName: "Completed WD101 - Level 4", date: "Aug 27 2021" },
  { eventName: "Completed WD101 - Level 5", date: "Aug 28 2021" },
  { eventName: "Completed WD101 - Level 6", date: "Aug 29 2021" },
  { eventName: "Completed WD101 - Level 7", date: "Aug 29 2021" },
  { eventName: "Completed WD101 - Level 8", date: "Aug 30 2021" },
  { eventName: "Completed WD201 - Level 1", date: "Sept 02 2021" },
  { eventName: "Completed WD201 - Level 2", date: "Sept 10 2021" },
  { eventName: "Completed WD201 - Level 3", date: "Sept 15 2021" },
  { eventName: "Completed WD201 - Level 4", date: "Sept 18 2021" },
  { eventName: "Completed WD201 - Level 5", date: "Sept 30 2021" },
  { eventName: "Completed WD201 - Level 6", date: "Oct 2 2021" },
  { eventName: "Completed WD201 - Level 7", date: "Oct 8 2021" },
  { eventName: "Completed WD201 - Level 8", date: "Oct 16 2021" }
];

let result = "";

function importantDates(dates) {
  // Complete the function
  let createLogItem = value => {
    let element = value.date + " - " + value.eventName;
    result += element + ",";
  };

  dates.forEach(createLogItem);

  result = result.substring(0, result.length - 1);
  result = result.split(",");
  let createListUsers = item => "<li><p>" + item + "</p></li>";
  let htmlView1 = items => items.map(createListUsers).join("\n");

  let view1 = htmlView1(result);

  document.getElementById("myDate").innerHTML = view1;
  // return result;
}

dte = importantDates(dates);
