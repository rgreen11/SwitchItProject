import React, {useState} from 'react';
import moment from 'moment';
import "./Calender.css"

let weekdayshort = moment.weekdaysShort();

export default function Calender(){
    let storage = {
        topClothing: '',
        bottomClothing: '',
        dateObject: moment(),
    }

   const firstDayOfMonth = () => {
        let dateObject = storage.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }
    // console.log(blanks[0])
    let daysInMonth = [];
    for (let d = 1; d <= daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className="calendar-day">
          {d}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows 
          cells = []; // empty container 
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
          rows.push(cells);
        }
      });

      let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
      });
      
console.log('daysInMonth',daysInMonth)

    return (
        <>
            <h2>Calender</h2>
            <div className ="calender">
                <div className='namesofweekday'>
                {
                    weekdayshort.map(day => {
                        return (
                        <div className ="dayname">
                            <th key={day} className="week-day">
                            {day}
                            </th>
                        </div>
                        );
                    })
                }
                </div>
            </div>
        </>
    )
}