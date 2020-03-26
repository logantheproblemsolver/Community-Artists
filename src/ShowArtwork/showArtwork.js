import React, {Component} from 'react';
import ArtworkData from './ArtworkData/artworkData';
import config from '../config';
import './showArtwork.css';

// This component is the component that does a GET request to the Community Artist API for all the artwork that has been uploaded
class ShowArtwork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artwork: [],
            error: null,
        };
    };

    setArtwork = artwork => {
        this.setState({
            artwork,
            error: null
        });
    };


    componentDidMount() {
        const APIEndpoint = config.API_ENDPOINT
        const artworkEndpoint = '/showartwork'
        const url = APIEndpoint + artworkEndpoint;

// It's a simple fetch request, and the data just goes straight into the state

        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(
                res => {
                    if(!res.ok) {
                        return res.json().then(error => Promise.reject(error))
                    }
                    return res.json()
                })
            .then(this.setArtwork)
            .catch(error => {
                console.error(error)
                this.setState({error})
            });


    };


    render() {
        
// Here we pass along the state into another component to digest the data
        return (
            <div className="showArtwork">
                <ArtworkData artworkdata={this.state.artwork} />
            </div>
        );
    };
};

export default ShowArtwork;