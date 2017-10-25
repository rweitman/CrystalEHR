// import React from 'react';
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// // import globalize from 'globalize';
// import events from './events';

// console.log(events)
// BigCalendar.momentLocalizer(moment);

// const Calendar = props => (
// 	<div id="calendarStyle">
// 	<BigCalendar
// 		events={events}
// 		startAccessor='startDate'
// 		endAccessor='endDate'
// 		views={['month', 'day', 'agenda']}
// 	/>
// 	</div>)

// export default Calendar

import React from 'react';
import { Glyphicon, Col, Row } from 'react-bootstrap';
// import BigCalendarCSS from 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import Moment from 'moment';
import Events from './events'; // https://github.com/jquense/react-big-calendar/blob/master/examples/events.js 

console.log(Events)
export default class Planner extends React.Component {
    constructor(props, context)
    {
        super(props, context);
        this.context = context;
        this.state = {events: Events};
        BigCalendar.setLocalizer(
                BigCalendar.momentLocalizer(Moment)
        );
    }

    handleSelectSlot({start, end})
    {
        //create an event with title "Test"
        console.log("handleSelectSlot: " + start + " - " + end);
        this.state.events.push({start: start, end: end, title: "Client Consultation"});
        this.setState({});

    }

    handleSelectEvent()
    {
        //just for example
        console.log("handleSelectEvent: " + JSON.stringify(arguments));
    }

    EventWeek(props)
    {
        return <strong>{props.event.title}</strong>
    }

    EventAgenda(props)
    {
        return <em>{props.event.title}</em>
    }

    render()
    {
        return (<div id="calendarStyle">
                <BigCalendar
                        selectable
                        popup
                        events={this.state.events}
                        onSelectSlot={this.handleSelectSlot.bind(this)}
                        onSelectEvent={this.handleSelectEvent.bind(this)}
                        defaultDate={new Date(2017, 9, 1)}
                        eventPropGetter={e => ({ className: 'test-class'})} /* Here you can define a style for the element */
                        components={{
              event: this.EventWeek,
              agenda: {
                event: this.EventAgenda
              }
            }}
                        />
        </div>);
    }
}