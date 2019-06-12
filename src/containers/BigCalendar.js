 import React, { Component } from 'react';
 import moment from 'moment';
 import axios from 'axios';
 import BigCalendar from 'react-big-calendar';

 import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

 import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
 import "react-big-calendar/lib/css/react-big-calendar.css";

 const DragAndDropCalendar = withDragAndDrop(BigCalendar);
 const localizer = BigCalendar.momentLocalizer(moment)

 class Calendar extends Component {
   constructor(props) {
    super(props);
    this.state = {
        events: [],
        topId: '',
        bottomId: '',
        stamp:'',
        nickName: ''

    };

}

componentDidMount(){
    const top = localStorage.getItem('top');
    const bottom = localStorage.getItem('bottom');
    const nickName = localStorage.getItem('nickName');
    
    axios({
        method: 'get',
        url: 'https://switchit1234.herokuapp.com/clothes/readAll',
    }).then((data)=>{
        console.log('data:', data.data)
        let events = [...this.state.events] 
        data.data.map((e)=>{
            const event = {
                start: '',
                end: '',
                title: `${e.nickname}`,
                id: e.id,
                allDay: false,
            }
            if(e.stamp.length < 1) {
                event.start = new Date()
                event.end = new Date()
            } else if (e.stamp[0] === '{') {
                event.start = new Date(e.stamp.split('').slice(1,e.stamp.length - 1).join(''))
                event.end = new Date(e.stamp.split('').slice(1,e.stamp.length - 1).join(''))
            }
            else {
                event.start = new Date(e.stamp)
                event.end = new Date(e.stamp)
            }
            events = events.concat(event)

        })
       
        this.setState({topid: top, bottomId: bottom, nickName: nickName, events: events})
    })
    .catch((error)=>{
        console.log(error)
    })
}


onEventDrop=({ event, start, end }) =>{
    const { events } = this.state;
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    const {id, title} = this.state.events[idx];

    const time = nextEvents.map((e)=>{

        return e.end
    })
// console.log('here', events.clothes_id, stamp, events.nickname)
    axios({
        method: 'put',
        url: 'https://switchit1234.herokuapp.com/clothes/update',
        data: {
            clothes_id: id,
            stamp: end,
            nickname: title
        }
      })
      .then(data=>{

          console.log('ootd saved')
      })
      .catch(error=>{
          console.log(error)
      })

    this.setState({
      events: nextEvents, stamp: time
    })
}



render() {
    const { events } = this.state;

    return (
        <div>
            <DragAndDropCalendar
                style={{ height: '100vh' }}
                localizer={localizer}
                culture="en-GB"
                events={events}
                defaultDate={new Date()}
                defaultView="month"
                startAccessor="start"
                endAccessor="end"
                titleAccessor="title"
                // onEventResize={this.onEventResize}
                onEventDrop={this.onEventDrop}
                resizable
                selectable
            />
        </div>
    );
  }
 }

export default Calendar;