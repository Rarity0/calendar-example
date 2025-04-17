// Props is an object
// Prop 1: changeCurrentDay --> Function
// Prop 2: day --> The specified day we choosen in date type
function CalendarDays(props) {
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  // Loop that generated 42 days and saves it to currentDays
  // currentDays is a list of objects:
  // - currentMonth
  // - date (Date type)
  // - month (with numbers)
  // - number (the number of the day)
  // - selected (boolean)
  // - year
  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
    }

    currentDays.push(calendarDay);
  }

  return (
    <div className="table-content">
      {
        currentDays.map((day, index) => {
          return (
            <div key={index} className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
              onClick={() => props.changeCurrentDay(day)}>
              <p>{day.number}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarDays;
