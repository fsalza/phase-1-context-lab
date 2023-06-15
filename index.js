/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }


function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
function createTimeInEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }


function createTimeOutEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10),
    });
    return this;
  }

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
  
    const startTime = timeInEvent.hour;
    const endTime = timeOutEvent.hour;
  
    return (endTime - startTime) / 100;
  }

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

