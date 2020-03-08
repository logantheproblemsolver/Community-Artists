import React, {Component} from 'react';
import RandomImage from'./randomimage.jpg';
import './showArtwork.css';


class ShowArtwork extends Component {
    render() {
        return (
            <div className="showArtwork">
                <h1>Artist's Work</h1>
                <img src={RandomImage} alt="artist's artwork" />
                <p>Artwork Title</p>
                <p>Name of the Artist</p>
                <p>Price of Artwork</p>
                <p>Description of Artwork</p>
            </div>
        )
    }
}

export default ShowArtwork;