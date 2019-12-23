import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null
        }
    }

    handleClick() {
        const event = {
            title: this.props.title,
            start_date: this.props.start_date,
            end_date: this.props.end_date,
            location_state: this.props.location_state,
            location_address_line_1: this.props.location_address_line_1,
            location_address_line_2: this.props.location_address_line_2,
            bg_image_path: this.props.bg_image_path,
        }
        this.props.updateShowEvents(false)
        this.props.updateEvent(event)
    }

    render() {
        return (
            <Card className="event">
                <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                <Card.Body>
                    <Card.Title className="event-title">{this.props.title}</Card.Title>
                    <Card.Text>
                        <p>{this.props.location_state}, {this.props.location_address_line_2}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleClick.bind(this)}>Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Event