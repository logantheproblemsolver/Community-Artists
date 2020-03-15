import React, {Component} from 'react';
import config from '../config'
import './uploadArtwork.css'


class UploadArtwork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            title: '', 
            name: '', 
            price: '$0', 
            description: '',
            error: null,
        }
    }

    onImageChange = image => {
        const types = ['imag/png', 'image/jpeg', 'image/jpg']
        let file = image.target.files

        console.log(file[0].type)
        if (types.every(type => file[0].type !== type)) {
            this.setState({
                error: 'File must be either .png, .jpeg, or .jpg'
            })
        } else {
            let encodedImage = btoa(file[0])
            this.setState({
                image: encodedImage
            })
        }
    }

    onTitleChange = title => {
        title.preventDefault();
        this.setState({
            title: title.target.value
        })
    }    

    onNameChange = name => {
        name.preventDefault();
        this.setState({
            name: name.target.value
        })
    }

    onPriceChange = price => {
        price.preventDefault();
        this.setState({
            price: '$' + price.target.value
        })
    }

    onDescriptionChange = desc => {
        desc.preventDefault();
        this.setState({
            description: desc.target.value
        })
    }

    onSubmit = submit => {
        submit.preventDefault();
        const {title, artist_name, price, description} = submit.target
        const uploadedArtwork = {
            image: this.state.image,
            title: title.value,
            artist_name: artist_name.value,
            price: price.value,
            description: description.value
        }

        console.log(uploadedArtwork)

        const url = config.API_ENDPOINT + '/uploadArtwork'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(uploadedArtwork),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
              return res.json().then(error => Promise.reject(error))
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            this.setState({
                error: error
            })
        })

    }


    render() {
        return (
            <div className="uploadArtwork">
                <div className="error">
                    {this.state.error}
                </div>
                <form className="form" onSubmit={e => this.onSubmit(e)} >
                    <label> Upload File: 
                    <input type="file" name="file" onChange={e => this.onImageChange(e)} required/>
                    </label> 
                    <label htmlFor="title">
                        Artwork Title:
                        <input type="text" name="title" placeholder="Title" onChange={e => this.onTitleChange(e)} value={this.state.title} required />
                    </label>            
                    <label htmlFor="artist_name">
                        Artist Name: 
                        <input type="text" name="artist_name" placeholder="Billy Bob" onChange={e => this.onNameChange(e)} /> 
                    </label>
                    <label htmlFor="price">
                        Artwork Price: 
                        <input type="number" name="price" placeholder="$100" onChange={e => this.onPriceChange(e)} />
                    </label>
                    <label htmlFor="description">
                        Artwork Description: 
                        <input id="description" name="description" type="text" placeholder="description" onChange={e => this.onDescriptionChange(e)} required/>
                    </label>
                    <button type="submit" className="submit">Upload Artwork</button>
                </form>
            </div>
        )
    }
}

export default UploadArtwork;