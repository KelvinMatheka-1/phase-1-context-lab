const createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }}
  const createEmployeeRecords = function(employeeData) {
    return employeeData.map(function(row){
    return createEmployeeRecord(row)
    })
  }
  const createTimeInEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this
  }
  const createTimeOutEvent = function(dateStamp){
    const [date, hour] = dateStamp.split(' ')
  
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this
  }
  const hoursWorkedOnDate = function(seekDate){
    const inEvent = this.timeInEvents.find(function(e){
        return e.date === seekDate
    })
  
    const outEvent = this.timeOutEvents.find(function(e){
        return e.date === seekDate
    })
  
    return (outEvent.hour - inEvent.hour) / 100
  }
  const wagesEarnedOnDate = function(seekDate){
    const wage = hoursWorkedOnDate.call(this, seekDate)
        * this.payPerHour
    return parseFloat(wage.toString())
  }
  const allWagesFor1 = function(){
    const allowedDates = this.timeInEvents.map(function(e){
        return e.date
    })
    
  
    const payableAmount = allowedDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d) }.bind(this), 0)
    return payableAmount
  }

  let findEmployeeByFirstName = function(array, firstName) {
    return array.find(function(rec){
      return rec.firstName === firstName
    })
  }
  const calculatePayroll = function(arrayOfRecords){
    return arrayOfRecords.reduce(function(memo, rec){
        return memo + allWagesFor1.call(rec)
    }, 0)
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

