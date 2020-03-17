import React, {Component} from 'react';





class ArtworkData extends Component {
    render() {

        const artwork = this.props.artworkdata.map((artwork, i) => { 

            return (
                <div className="artworkImageSection" key={i}>
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