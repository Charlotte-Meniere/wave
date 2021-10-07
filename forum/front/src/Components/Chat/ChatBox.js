import React from "react";
import PropTypes from "prop-types";
import ChatMessage from "./ChatMessage";

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            msgs: []
        };
    }
    updateData(){
        fetch("/api/messages?cat="+this.props.category)
        .then(res => res.json())
        .then((result) => {
                this.setState({
                    isLoaded: true,
                    msgs: result
                });
            },(error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }
    
    componentDidMount() {
        this.updateData();
        setInterval(() => {
            this.updateData();
        }, 5000);
    }
    render() {
        const { error, isLoaded, msgs } = this.state;
        if(!isLoaded){
            return "";
        }
        var err="";
        if(error!=null){ 
            console.info(error);
            err= <div><h2>Error</h2></div> 
        }
        var chatMsgs = [];
        console.log("creating msgs");
        msgs.forEach((msg, key) => {
            chatMsgs.push(
                <ChatMessage key={key} msg={msg} />
            );
        });
        return (
            <div className="ChatBox">
                {err}
                {chatMsgs}
            </div>
        )
    }
}
ChatBox.propTypes = {
    category: PropTypes.string

};
ChatBox.defaultProps = {
    category: "Group"
}

export default ChatBox;
