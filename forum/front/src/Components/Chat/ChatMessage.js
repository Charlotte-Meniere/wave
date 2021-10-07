import React from "react";
import PropTypes from "prop-types";

class ChatMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const msg = this.props.msg;
        var dt = msg.date;
        dt = new Date(dt);
        const date = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return (
            <div className="ChatMessage">
                <div>
                    {/* <p>Endpoint: {this.props.msg}</p> */}
                    <h3>{msg.author.firstname} said:</h3>
                    <h4>{msg.content}</h4>
                </div>
                <h4>at {date}</h4>
            </div>
        )
    }
}
ChatMessage.propTypes = {
    msg: PropTypes.object.isRequired
};

export default ChatMessage;
