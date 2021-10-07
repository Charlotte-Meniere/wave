import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
//import "./ChatOnline.css";

function ChatOnline(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [html, setItems] = useState([]);

    useEffect(() => {
        fetch("/api")
          .then(res => res.text())
          .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
                //console.log(result);
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          )
      }, [])

    return (
        <div className="ChatOnline">
            <ul>
                <li>Mister X is ONLINE</li>
                <li>Mister X is ONLINE</li>
                <li>Mister X is ONLINE</li>
                <li>Mister X is ONLINE</li>
                <li>Mister X is ONLINE</li>
            </ul>
            <p>
                Endpoint: {props.endpoint}
            </p>
        </div>
    );
}
ChatOnline.propTypes = {
    text: PropTypes.string,
    endpoint: PropTypes.string.isRequired
};
ChatOnline.defaultProps = {
    text: "hello"
}

export default ChatOnline;
