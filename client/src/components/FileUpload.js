import React, {Component} from 'react';
import axios from "axios";

export default class FileUpload extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
        console.log(event.target.files[0])

    };

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post("http://localhost:8000/upload",data,{}).then(res => { // then print response status
            console.log(res.statusText);
        });
    };

    render() {
        return (
            <div>
                <label>Uploader </label>
                <input type='file' name="file" onChange={this.onChangeHandler}/>
                <button onClick={this.onClickHandler}>envoi</button>
            </div>
        )
    }
}
