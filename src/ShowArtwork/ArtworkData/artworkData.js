import React, {Component} from 'react';



// In this component the sole focus is to digest and output data from showArtwork's API request. Since the data comes to us as a JSON format we just map over it and use dot notation to specify data

class ArtworkData extends Component {
    render() {
        const artwork = this.props.artworkdata.map((artwork) => { 
            return (
                <div className="artworkImageSection" key={artwork.id}>
                    <img src={artwork.image} alt="artist's artwork" className="artworkImages"/>
                    <p>{artwork.title}</p>
                    <p>{artwork.artist_name}</p>
                    <p>{artwork.price}</p>
                    <p>{artwork.description}</p>
                </div>
            )
        })


       


        return (
            <div className="artwork">
                {artwork}
            </div>
        )
    }
}

export default ArtworkData;