// Calendar.js
import React from 'react';


const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const totalDaysInWeek = 7;

  const generateCalendarDates = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDates = [];

    // Fill the calendarDates array with leading blank spaces
    for (let i = 0; i < startingDay; i++) {
      calendarDates.push('');
    }

    // Fill the calendarDates array with days of the month
    for (let i = 1; i <= totalDaysInMonth; i++) {
      calendarDates.push(i);
    }

    // Calculate the number of trailing blank spaces
    const trailingBlanks = totalDaysInWeek - (calendarDates.length % totalDaysInWeek);
    // Fill the calendarDates array with trailing blank spaces
    for (let i = 0; i < trailingBlanks; i++) {
      calendarDates.push('');
    }

    return calendarDates;
  };

  const calendarDates = generateCalendarDates();

  return (
    <div className="calendar-container" style={{ position: 'absolute', bottom: '-300px', right: '150px' }}>
      <table className="calendar-table">
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarDates.map((date, index) => (
            index % totalDaysInWeek === 0 ? // Start a new row for each week
              <tr key={index}>
                {calendarDates.slice(index, index + totalDaysInWeek).map((date, idx) => (
                  <td key={idx}>{date}</td>
                ))}
              </tr>
              : null
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;