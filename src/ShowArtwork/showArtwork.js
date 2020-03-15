import React, {Component} from 'react';
import ArtworkData from './ArtworkData/artworkData'
import config from '../config';
import './showArtwork.css';


class ShowArtwork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artwork: [],
            error: null,
        }
    }

    setArtwork = artwork => {
        this.setState({
            artwork,
            error: null
        })
    }


    componentDidMount() {
        const APIEndpoint = config.API_ENDPOINT
        const artworkEndpoint = '/showartwork'
        const url = APIEndpoint + artworkEndpoint;
        
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
            })


    }

    render() {
        return (
            <div className="showArtwork">
                <ArtworkData artworkdata={this.state.artwork} />
            </div>
        )
    }
}

export default ShowArtwork;