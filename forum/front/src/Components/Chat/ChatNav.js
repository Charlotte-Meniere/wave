import React from "react";
class ChatMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="ChatNav">
            <div className="outter">
              <a href="/accueil">Accueil</a>
              <a href="/profile">Mon Profil</a>
              <div className="inner">
                <p>Messages</p>
                <div className="innerContent">
                  <a href="/forum?category=Forum">Messages du forum</a>
                  <a href="/forum?category=Group">Messages de groupe</a>
                </div>
              </div>
              <a href="cours">Mes cours</a>
            </div>
          </div>
        )
    }
}
ChatMessage.propTypes = {
    //msg: PropTypes.object.isRequired
};

export default ChatMessage;
