// import React from 'react';
// import moment from 'moment';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/Calendar.css";


// let weekdayshort = moment.weekdaysShort();

// const handleDay =(d)=>{
//     console.log(moment(d))
//  }

//  let storage = {
//     topClothing: '',
//     bottomClothing: '',
//     dateObject: moment(),
//     allmonths: moment.months()
// }

// let weekdayshortname = weekdayshort.map(day => {
//     return (
//         <th key={day} className="week-day">
//             {day}
//         </th>
//     );
// });


// const firstDayOfMonth = () => {

//     let dateObject = storage.dateObject;
//     let firstDay = moment(dateObject)
//         .startOf("month")
//         .format("d");
//     return firstDay;
// };



// let blanks = [];
// for (let i = 0; i < firstDayOfMonth(); i++) {
//     blanks.push(
//         <td className="calendar-day empty">{""}</td>
//     );
// }



// let daysInMonth = [];
// for (let d = 1; d <= storage.dateObject.daysInMonth(); d++) {
//     daysInMonth.push(
//         <td key={d} className="calendar-day highlight" onClick={()=>{handleDay(d)}}>
//             {d}
//         </td>
//     );
// }

// let totalSlots = [...blanks, ...daysInMonth];
// let rows = [];
// let cells = [];

// totalSlots.forEach((row, i) => {
//     if (i % 7 !== 0) {
//         cells.push(row); // if index not equal 7 that means not go to next week
//     } else {
//         rows.push(cells); // when reach next week we contain all td in last week to rows 
//         cells = []; // empty container 
//         cells.push(row); // in current loop we still push current row to new container
//     }
//     if (i === totalSlots.length - 1) { // when end loop we add remain date
//         rows.push(cells);
//     }
// });

// let daysinmonth = rows.map((d, i) => {

//     return <tr>{d}</tr>;
// });




// let currentDay = () => {  
// return storage.dateObject.format("D");
// };

// // let daysInMonth = [];
// for (let d = 1; d <= storage.dateObject.daysInMonth(); d++) {
//     currentDay = d = currentDay() ? "today" : ""; 
//     daysInMonth.push(
//         <td key={d} className={`calendar-day ${currentDay}`}>
//             {d}
//         </td>
//     );
// }

// let month = () => {
//     return storage.dateObject.format("MMMM");
//   };

//   let months = [];

//   let MonthList = props => {
  
//   }
 
//   storage.allmonths.map(data => {
//     months.push(
//       <td>
//         <span>{data}</span>
//       </td>
//     );
//   });

//   let monthRow = [];
//   let cellMonth = [];
  
// months.forEach((row, i) => { 
//     if (i % 3 !== 0 || i == 0) { // except zero index 
//         cellMonth.push(row); 
//     } else { 
//         monthRow.push(cellMonth); 
//         cellMonth = [];
//         cellMonth.push(row); 
//     }
//  });
//  monthRow.push(cellMonth);



//  let monthlist = monthRow.map((d, i) => {
//     return <tr>{d}</tr>;
//  });

//  let setMonth = month => {
//     let monthNo = this.months.indexOf(month);// get month number 
//     let dateObject = Object.assign({}, this.state.dateObject);
//     dateObject = moment(dateObject).set("month", monthNo); // change month value
//     this.setState({
//       dateObject: dateObject // add to state
//     });
//   };

//   props.data.map(data => {
//     months.push(
//       <td
//         key={data}
//         className="calendar-month"
//         onClick={e => {
//           this.setMonth(data);
//         }}
//       >
//         <span>{data}</span>
//       </td>
//     );
//   });
 
// export default function Calender() {
  
     
     
//     return (
//         <>
//         <h2>Calendar</h2>
//             <div className="calendar center">
//                 <div className='namesofweekday'>
//                 <tr>{month()}</tr>
//                     <table className="calendar-month">
//                         <thead>
//                             <tr>
//                                 <th colSpan="4">Select a Month</th>
//                             </tr>
//                         </thead>
//                         <tbody>{monthlist}</tbody>
//                     </table>

//                     <div className="center">
//                         <table className="calendar-day">
//                             <thead>
//                                 <tr>{weekdayshortname}</tr>
//                             </thead>
//                             <tbody>{daysinmonth}</tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export default class LittleCalender extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}