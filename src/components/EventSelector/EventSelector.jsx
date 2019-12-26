import React from 'react';
import axios from 'axios';
import Event from '../Event/Event.jsx'


class EventSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null
        }
    }

    componentWillMount() {
        axios.get("https://events.prephoops.com/event-list")
            .then(response => {
                this.setState({ events: response.data })
            })
            .catch(error => console.log("There was an error loading the API"))
    }

    render() {
        const { events } = this.state
        const { updateSelectedEvent, workFlowInProgress } = this.props

        if (workFlowInProgress) {
            return <h1>Loading ... </h1>
        }
        return (
            <div>
                {
                    events ?
                        events.map((event, index) =>
                            <Event
                                key={index}
                                title={event.title}
                                start_date={event.start_date}
                                end_date={event.end_date}
                                bg_image_path={event.bg_image_path}
                                location_state={event.location_state}
                                location_address_line_1={event.location_address_line_1}
                                location_address_line_2={event.location_address_line_2}
                                updateSelectedEvent={updateSelectedEvent}
                            />
                        ) : null
                }
            </div>
        );
    }
}

export default EventSelector

