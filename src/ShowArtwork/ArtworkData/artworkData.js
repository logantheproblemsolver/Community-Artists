import React, {Component} from 'react';




class ArtworkData extends Component {
    render() {

        const artwork = this.props.artworkdata.map((artwork, i) => { 
                const imageDecoder = atob(artwork.image)
                const decodedImage = 'data:image/jpeg;base64' + imageDecoder
            return (
                <div key={i}>
                    <img src={decodedImage} alt="artist's artwork" />
                    <p>{artwork.title}</p>
                    <p>{artwork.artist_name}</p>
                    <p>{artwork.price}</p>
                    <p>{artwork.description}</p>
                </div>

        )
        })
        return (
            <div>
                {artwork}
            </div>
        )
    }
}

export default ArtworkData;