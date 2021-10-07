import React, {Component} from 'react';
import axios from "axios";

export default class FileDownload extends Component{

    state = {
        listFile: [],
        test: '/uploadFile/'
    };

    componentDidMount() {
        axios.get('http://localhost:8000/download',{}).then(r => {
            if (r.data.length){
                const files = r.data.map(name => ({nom: name}));
                this.setState({listFile: files});
            }
        });
    }

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Fichier</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.listFile.map((file) => (
                        <tr>
                            <td>{file.nom}</td>
                            <td>
                                <a href={this.state.test+file.nom}>Télécharger</a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
