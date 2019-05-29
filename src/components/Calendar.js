import React, { useState } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Calendar.css";


let weekdayshort = moment.weekdaysShort();


export default function Calender() {
    let storage = {
        topClothing: '',
        bottomClothing: '',
        dateObject: moment(),
        allmonths: moment.months()
    }


    let weekdayshortname = weekdayshort.map(day => {
        return (
            <th key={day} className="week-day">
                {day}
            </th>
        );
    });

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



    let daysInMonth = [];
    for (let d = 1; d <= storage.dateObject.daysInMonth(); d++) {
        daysInMonth.push(
            <td key={d} className="calendar-day">
                {d}
            </td>
        );
    }

    let totalSlots = [...blanks, ...daysInMonth];
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

 


   let currentDay = () => {  
    return storage.dateObject.format("D");
};

    // let daysInMonth = [];
    for (let d = 1; d <= storage.dateObject.daysInMonth(); d++) {
        currentDay = d = currentDay() ? "today" : ""; 
        daysInMonth.push(
            <td key={d} className={`calendar-day ${currentDay}`}>
                {d}
            </td>
        );
    }

   let month = () => {
        return storage.dateObject.format("MMMM");
      };

     let MonthList = props => {}

     
     

    return (
        <>
        <h2>Calendar</h2>
            <div className="calendar">
                <div className='namesofweekday'>
                
                <tr>{month()}</tr>
                    <table className="calendar-day">
                        <thead>
                            <tr>{weekdayshortname}</tr>
                        </thead>
                        <tbody>{daysinmonth}</tbody>
                    </table>
                </div>
            </div>
        </>
    )
}