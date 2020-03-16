import React, {Component} from 'react';
import config from '../config'
import axios from 'axios'
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
        const types = ['image/jpeg', 'image/jpg']
        let file = image.target.files

        if (types.every(type => file[0].type !== type)) {
            this.setState({
                error: 'File must be either .jpeg, or .jpg'
            })
        } else {

            this.setState({
                image: file[0]
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
        let myForm = document.getElementById('form')
        const formData = new FormData(myForm);

        const request = {
            headers: {
                'content-type': 'application/json'
            }
        };
        const url = config.API_ENDPOINT + '/uploadArtwork'

        axios.post(url, formData, request)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                  }
                  return res.json()
            })
            .then(data => {
                alert("The file is successfully uploaded");
                console.log(data)
            })
            .catch(error => {
                this.setState({
                    error: error
                })
        });
    }


    render() {
        return (
            <div className="uploadArtwork">
                <div className="error">
                    {this.state.error}
                </div>
                <form className="form" id="form" onSubmit={e => this.onSubmit(e)} >
                    <label htmlFor="image"> Upload File: 
                    <input type="file" name="image" onChange={e => this.onImageChange(e)} required/>
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